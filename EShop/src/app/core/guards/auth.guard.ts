import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:AuthServiceService,private route:Router){

  }
  canActivate(){
    if(this.service.IsLoggedIn()){
    return true;
    }else{
      this.route.navigate(['auth/login'])
      return false;
    }
  }
  
}