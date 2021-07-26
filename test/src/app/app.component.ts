import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, } from "@angular/forms";
import { from } from 'rxjs';
import{ApiService} from './shared/service/api.service'
import{Emplyeemodel} from './employeeModel'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  employeedata: any;
  // ShowAdd: boolean;
  // Showupdate: boolean;
  Employeemodelobj: Emplyeemodel = new Emplyeemodel();
  FormData = this.formBuilder.group({
    // selectType:[''],
    productName: [''],
    productTyp: [''],
    unitType: [''],
    Price: [''],
    isInStockType: [''],

  })
  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.employeedata;
    this.getAllProduct;
  }
  clickaddemply(){
    this.FormData.reset();
    // this.ShowAdd = true;
    // this.Showupdate = false
  }
postProductdetails(){
  console.log(this.FormData)
  // this.Employeemodelobj.FirstNsame = this.FormValu.value.selectType;
  this.Employeemodelobj.productName = this.FormData.value.productName;
  this.Employeemodelobj.productTyp = this.FormData.value.productTyp;
  this.Employeemodelobj.unitType = this.FormData.value.unitType;
  this.Employeemodelobj.Price = this.FormData.value.Price;
  this.Employeemodelobj.isInStockType = this.FormData.value.isInStockType;

  this.api.PostProduct(this.Employeemodelobj)
   .subscribe(res =>{
    alert("emply add success")
    console.log(this.Employeemodelobj);
    let ref = document.getElementById('cancel')
    ref?.click();
    this.FormData.reset();
    // this.getAllempl();
  },
    err => {
      alert("somthing")
    })
}
getAllProduct() {
  this.api.GetProduct().subscribe(res => {
    this.employeedata = res;
  })
}
DeltProduct(row: any) {
  this.api.DeleteProduct(row.id).subscribe(res=>{
    alert('emply delte')
    this.getAllProduct;
  })
}
ProductEdit(row: any) {

  // this.ShowAdd = false;
  // this.Showupdate = true;
  this.Employeemodelobj = row.id;
  this.FormData.controls['productName'].setValue(row.productName)
  this.FormData.controls['productTyp'].setValue(row.productTyp);
  this.FormData.controls['unitType'].setValue(row.unitType);
  this.FormData.controls['Price'].setValue(row.Price);
  this.FormData.controls['isInStockType'].setValue(row.isInStockType);

}
updateProductdetails(){
  this.Employeemodelobj.productName = this.FormData.value;
  console.log(this.Employeemodelobj.productName)
  this.Employeemodelobj.productTyp = this.FormData.value.productTyp;
  this.Employeemodelobj.unitType = this.FormData.value.unitType;
  this.Employeemodelobj.Price = this.FormData.value.Price;
  this.Employeemodelobj.isInStockType = this.FormData.value.isInStockType;

this.api.UpdateProduct(this.Employeemodelobj,this.Employeemodelobj.id=0).subscribe(res => {
   console.log(this.Employeemodelobj);
    alert('update success');
    let ref = document.getElementById('cancle')
    ref?.click();
    this.FormData.reset();
    this.getAllProduct;
  })
}

}



