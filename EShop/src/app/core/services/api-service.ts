import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    readonly APIUrl = "https://localhost:44376";

    constructor(private http: HttpClient) { }

    get(
        path: string,
        params = {},
        headers = new HttpHeaders()
    ): Observable<any> {
        return this.http.get(`${ this.APIUrl }${ path }`, { params, headers });
    }

    put(path: string, body = {}, headers = new HttpHeaders()): Observable<any> {
        return this.http.put(`${ this.APIUrl }${ path }`, body, { headers });
    }

    post(
        path: string,
        body = {},
        params = {},
        headers = new HttpHeaders()
    ): Observable<any> {
        return this.http.post(`${ this.APIUrl }${ path }`, body, { params, headers });
    }

    delete(path: string): Observable<any> {
        return this.http.delete(`${ this.APIUrl }${ path }`);
    }
}