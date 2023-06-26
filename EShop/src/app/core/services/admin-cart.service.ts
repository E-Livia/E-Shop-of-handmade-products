import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ApiService } from './api-service';

@Injectable({
  providedIn: 'root'
})
export class AdminCartServiceService{
    readonly APIUrl="https://localhost:44376/api";

    constructor(private http:HttpClient, private apiService:ApiService) { }
  
    getAdminCart(username: string):Observable<any[]>{
        return this.http.get<any>(this.APIUrl + `/cart/admin/${username}`);
    }

    addToAdminCart(username:string, productId:number){
      return this.apiService.post(`/api/cart/admin/${username}/${productId}`);
    }

    removeFromAdminCart(username:string, productId:number){
      return this.apiService.delete(`/api/cart/admin/${username}/${productId}`);
    }

    getAdminTotalPrice(username:string){
      return this.apiService.get(`/api/cart/admin/totalPrice/${username}`)
      .pipe(
        map((response: any) => response[0])
      );
    }

    decreaseProductQuantity(username:string, productId:number){
      return this.apiService.delete(`/api/cart/admin/decrease/${username}/${productId}`);
    }
}