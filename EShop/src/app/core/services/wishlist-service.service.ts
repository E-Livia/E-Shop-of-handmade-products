import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistServiceService{
    readonly APIUrl="https://localhost:44376/api";

    constructor(private http:HttpClient) { }
  
    getClientWishlist(username: string):Observable<any[]>{
        return this.http.get<any>(this.APIUrl + `/wishlist/${username}`);
    }
}