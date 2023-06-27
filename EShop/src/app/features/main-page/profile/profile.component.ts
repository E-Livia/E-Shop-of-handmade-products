import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';
import { CategoryServiceService } from 'src/app/core/services/category-service.service';
import { ClientServiceService } from 'src/app/core/services/client-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  date="Datele contului";
  date1="Adresa mea";
  date2="Adresa de facturare";
  loggedInUsername:string;
  loggedInRole:string;
  User:any=[];
  UserAddress:any=[];
  UserBillingAddress:any=[];
  OrderHistory:any=[];

  goToAboutPage(){
    this.router.navigate(['/about']);
  }

  logOut = () => {
    localStorage.removeItem("token");
    this.router.navigate(['auth']);
    this.cateoryService.setSelectedCategory("");
  }

  constructor(private router:Router, private authService:AuthServiceService,private clientService:ClientServiceService, private cateoryService:CategoryServiceService) {
    this.loggedInUsername=this.authService.getLoggedInUsername();
    this.loggedInRole=this.authService.getLoggedInRole();
   }

  ngOnInit(): void {
    this.getUserInfo();
    this.getProfileUserAddress();
    this.getClientBillingAddress();
    this.getClientOrderHistory();
  }

  getUserInfo() {
    this.clientService.getClientInfo(this.loggedInUsername).subscribe(data => {
      this.User = data;
      console.log(this.User);
    });
    
  }

  updateInfo(){
    this.router.navigate(['profile/updateInfo']);
  }

  getProfileUserAddress() {
    this.clientService.getProfileClientAddress(this.loggedInUsername).subscribe(data => {
      this.UserAddress = data;
      console.log(this.UserAddress);
    });
    
  }

  getClientBillingAddress() {
    this.clientService.getClientBillingAddress(this.loggedInUsername).subscribe(data => {
      this.UserBillingAddress = data;
      console.log(this.UserBillingAddress);
    });
    
  }

  getClientOrderHistory() {
    this.clientService.getClientOrderHistory(this.loggedInUsername).subscribe(data => {
      this.OrderHistory = data;
      console.log(this.OrderHistory);
    });
    
  }

  useSameAddress(){
    this.UserBillingAddress=this.UserAddress;
    //to do, functie de update billing address sau de add cu drop inainte, ceea ce e de preferat
  }

}
