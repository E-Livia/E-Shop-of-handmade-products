import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ApiService } from './api-service';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  readonly APIUrl="https://localhost:44376/api";

  constructor(private http:HttpClient, private apiService:ApiService) { 
  }

  getProductList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/product');
  }

  getProductByCategory(categoryName: string): Observable<any[]> {
  return this.http.get<any>(this.APIUrl + `/product/categories/${categoryName}`);
}

  addProduct(val:any){
    return this.http.post(this.APIUrl+'/product',val);
  }

  getProductById(productId:number){
    return this.apiService.get(`/api/product/${productId}`).pipe(
      map((response: any) => response[0])
    );
  }
}
