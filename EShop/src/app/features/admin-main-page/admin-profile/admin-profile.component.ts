import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/core/services/admin-service.service';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';
import { CategoryServiceService } from 'src/app/core/services/category-service.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {
  date="Datele contului";
  date1="Adresa mea";
  date2="Adresa de facturare";
  loggedInUsername:string;
  loggedInRole:string;
  User:any=[];
  UserAddress:any=[];
  UserBillingAddress:any=[];
  OrderHistory:any=[];

  constructor(private router:Router, private authService:AuthServiceService
    ,private cateoryService:CategoryServiceService
    ,private adminService:AdminServiceService) {
      this.loggedInUsername=this.authService.getLoggedInUsername();
    this.loggedInRole=this.authService.getLoggedInRole();
     }

  ngOnInit(): void {
    this.getUserInfo();
    this.getAdminAddress();
    this.getAdminBillingAddress();
    this.getAdminOrderHistory();
  }

  goToAboutPage(){
    this.router.navigate(['/about']);
  }

  logOut = () => {
    localStorage.removeItem("token");
    this.router.navigate(['auth']);
    this.cateoryService.setSelectedCategory("");
  }

  getUserInfo() {
    this.adminService.getAdminInfo(this.loggedInUsername).subscribe(data => {
      this.User = data;
      console.log(this.User);
    });
    
  }

  getAdminAddress() {
    this.adminService.getAdminAddress(this.loggedInUsername).subscribe(data => {
      this.UserAddress = data;
      console.log(this.UserAddress);
    });
    
  }

  getAdminBillingAddress() {
    this.adminService.getAdminBillingAddress(this.loggedInUsername).subscribe(data => {
      this.UserBillingAddress = data;
      console.log(this.UserBillingAddress);
    });
    
  }

  getAdminOrderHistory() {
    this.adminService.getAdminOrderHistory(this.loggedInUsername).subscribe(data => {
      this.OrderHistory = data;
      console.log(this.OrderHistory);
    });
    
  }

  useSameAddress(){
    this.UserBillingAddress=this.UserAddress;
    //to do, functie de update billing address sau de add cu drop inainte, ceea ce e de preferat
  }
}
