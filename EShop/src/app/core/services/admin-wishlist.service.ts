import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api-service';

@Injectable({
  providedIn: 'root'
})
export class AdminWishlistServiceService{

    constructor(private http:HttpClient, private apiService:ApiService) { }
  
    getAdminWishlist(username: string):Observable<any[]>{
        return this.apiService.get(`/api/wishlist/admin/${username}`);
    }

    addToAdminWishlist(username:string, productId:number){
      return this.apiService.post(`/api/wishlist/admin/${username}/${productId}`);
    }

    removeFromWishlist(username:string, productId:number){
      return this.apiService.delete(`/api/wishlist/admin/${username}/${productId}`);
    }
}