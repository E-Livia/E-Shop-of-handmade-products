import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ApiService } from './api-service';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService{
    readonly APIUrl="https://localhost:44376/api";

    constructor(private http:HttpClient, private apiService:ApiService) { }
  
    getClientCart(username: string):Observable<any[]>{
        return this.http.get<any>(this.APIUrl + `/cart/${username}`);
    }

    addToCart(username:string, productId:number){
      return this.apiService.post(`/api/cart/${username}/${productId}`);
    }

    removeFromCart(username:string, productId:number){
      return this.apiService.delete(`/api/cart/${username}/${productId}`);
    }

    getClientTotalPrice(username:string){
      return this.apiService.get(`/api/cart/totalPrice/${username}`)
      .pipe(
        map((response: any) => response[0])
      );;
    }
}