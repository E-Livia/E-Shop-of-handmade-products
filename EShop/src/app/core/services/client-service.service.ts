import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ClientServiceService {
    readonly APIUrl = "https://localhost:44376/api";
    username: string = '';

    constructor(private http: HttpClient) { }

    getClientInfo(username: string): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + `/client/${username}`);
    }

    getProfileClientAddress(username: string): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + `/client/clientAddress/${username}`);
    }

    getClientOrderHistory(username: string): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + `/client/clientOrderHistory/${username}`);
    }
}