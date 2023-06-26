import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AdminServiceService {
    readonly APIUrl = "https://localhost:44376/api";

    constructor(private http: HttpClient) { }

    getAdminInfo(username: string): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + `/employee/${username}`);
    }

    getAdminAddress(username: string): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + `/employee/employeeAddress/${username}`);
    }

    getAdminBillingAddress(username: string): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + `/employee/employeeBillingAddress/${username}`);
    }

    getAdminOrderHistory(username: string): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + `/employee/employeeOrderHistory/${username}`);
    }
}