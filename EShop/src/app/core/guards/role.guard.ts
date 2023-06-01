import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private service:AuthServiceService,private route:Router){

  }
  canActivate(){
    if(this.service.HaveAccess()){
    return true;
    }else{
        this.route.navigate([''])
      return false;
    }
  }
  
}