import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
   private httpOptions;
  constructor(private httpClient:HttpClient) { 
    this.httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
  }
  getAllProducts():Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.APIURL}/productList`);
  }
  getProductsByCat(catId:number):Observable<IProduct[]>{
    if(catId==0) return this.getAllProducts();
    return this.httpClient.get<IProduct[]>(`${environment.APIURL}/productList?cateogryID=${catId}`);

  }
  getProductByID(prdId:number):Observable<IProduct>{
    return this.httpClient.get<IProduct>(`${environment.APIURL}/productList/${prdId}`);

  }
  AddNewProduct(prd:IProduct):Observable<IProduct>{
    return this.httpClient.post<IProduct>(`${environment.APIURL}/productList`,JSON.stringify(prd),this.httpOptions);
  }
  updateProduct(prdId:number,newprd:IProduct) {
    
  }
  deleteProduct(prdId:number){
    
  }

}
