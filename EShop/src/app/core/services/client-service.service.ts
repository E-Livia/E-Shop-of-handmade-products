import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api-service';

@Injectable({
    providedIn: 'root'
})

export class ClientServiceService {
    readonly APIUrl = "https://localhost:44376/api";

    constructor(private http: HttpClient, private apiService:ApiService) { }

    getClientInfo(username: string): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + `/client/${username}`);
    }

    updateClientInfo(username: string,firstName:String, lastName:string, emailAddress:String, phoneNo:number): Observable<any[]> {
        return this.apiService.put(`/api/client/${username}/${firstName}/${lastName}/${emailAddress}/${phoneNo}`);

    }

    getProfileClientAddress(username: string): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + `/client/clientAddress/${username}`);
    }

    getClientBillingAddress(username: string): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + `/client/clientBillingAddress/${username}`);
    }

    getClientOrderHistory(username: string): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + `/client/clientOrderHistory/${username}`);
    }
}