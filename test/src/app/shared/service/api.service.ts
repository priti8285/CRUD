import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  PostProduct(data: any) {
    return this.http.post<any>("http://localhost:3000/posts", data)
      .pipe(map((res: any)=>{
        return res;
      }))
  }GetProduct() {
    return this.http.get<any>("http://localhost:3000/posts")
      .pipe(map((res: any) => {
        return res;
      }))
  }
  UpdateProduct(data: any, id:number) {
    return this.http.put<any>("http://localhost:3000/posts/"+id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  DeleteProduct(id:number) {
    return this.http.delete<any>("http://localhost:3000/posts/"+id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

} 
