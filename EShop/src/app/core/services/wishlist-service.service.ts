import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api-service';

@Injectable({
  providedIn: 'root'
})
export class WishlistServiceService{
    readonly APIUrl="https://localhost:44376/api";

    constructor(private http:HttpClient, private apiService:ApiService) { }
  
    getClientWishlist(username: string):Observable<any[]>{
        return this.http.get<any>(this.APIUrl + `/wishlist/${username}`);
    }

    addToWishlist(username:string, productId:number){
      return this.apiService.post(`/api/wishlist/${username}/${productId}`);
    }
}