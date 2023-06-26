import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AdminServiceService {
    readonly APIUrl = "https://localhost:44376/api";
    username: string = '';

    constructor(private http: HttpClient) { }

    //to do partea de profile
    getClientInfo(username: string): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + `/employee/${username}`);
    }

    getProfileClientAddress(username: string): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + `/employee/employeeAddress/${username}`);
    }

    getClientOrderHistory(username: string): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + `/employee/employeeOrderHistory/${username}`);
    }
}