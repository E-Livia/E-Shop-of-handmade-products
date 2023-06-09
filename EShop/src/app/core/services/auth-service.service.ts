import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiService } from './api-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  readonly APIUrl = "https://localhost:44376/user/authenticate";
  private loggedInUsername: string = '';
  private loggedInRole:string='';

  constructor(private apiService:ApiService, private router:Router) { }

  // registerUser(val: any) {
  //   return this.httpClient.post(this.APIUrl + '/user', val);
  // }

  ProceedLogin(UserCred: any) {
    return this.apiService.post("/user/authenticate",UserCred);
  }

  getLoggedInUsername():string{
    return this.loggedInUsername=localStorage.getItem('Username')||'';
  }

  getLoggedInRole():string{
    return this.loggedInRole=localStorage.getItem('Role')||'';
  }

  GenerateRefreshToken() {
    let input={      
        "jwtToken": this.GetToken(),
        "refreshToken": this.GetRefreshToken()      
    }
    return this.apiService.post("/user/refresh",input)
  }

  IsLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  GetToken() {
    return localStorage.getItem('token') || '' ;
  }

  GetRefreshToken() {
    return localStorage.getItem('refreshToken') || '' ;
  }

  SaveTokens(tokenData:any){
    localStorage.setItem('token',tokenData.JWTToken);
    localStorage.setItem('refreshToken',tokenData.RefreshToken);

  }

  showAlert(){
    alert('Acces interzis');
  }
  
  HaveAccess() {
    var loggintoken = localStorage.getItem('token') || '';
    var _extractedtoken = loggintoken.split('.')[1];
    var _atobdata = atob(_extractedtoken);
    var _finaldata = JSON.parse(_atobdata);
    if (_finaldata.role == 'admin') {
      return true
    } else {
      this.showAlert();
      return false
    }
  }

  Logout(){
    localStorage.clear();
    this.router.navigate(['/auth']);
  }
}
