import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminCartServiceService } from 'src/app/core/services/admin-cart.service';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';
import { CartServiceService } from 'src/app/core/services/cart-service.service';
import { CategoryServiceService } from 'src/app/core/services/category-service.service';

@Component({
  selector: 'app-admin-cart',
  templateUrl: './admin-cart.component.html',
  styleUrls: ['./admin-cart.component.scss']
})
export class AdminCartComponent implements OnInit {
  loggedInUsername:string;
  totalPrice:number=0;
  transportPrice:number=15;
  cartPrice:number=0;
  categoryName!:string;
  
  constructor(private router:Router, private adminCartService:AdminCartServiceService,private authService:AuthServiceService, private catService:CategoryServiceService) {
    this.loggedInUsername=this.authService.getLoggedInUsername();
   }
  
  ngOnInit(): void {
    this.getTotalPrice();
  }
  
  continueShopping(){
    this.catService .selectedCategory$.subscribe(category=>{
      this.categoryName=category;
      if(this.categoryName){
        this.router.navigate(['admin-main-page/category',this.categoryName])
      }else{
        this.router.navigate(['/admin-main-page']);
      }
    })
  }

  proceedOrder(){
    this.router.navigate(['admin-main-page/admin-cart/order-details']);
  }

  getTotalPrice(){
    return this.adminCartService.getAdminTotalPrice(this.loggedInUsername)
    .subscribe(data => {
      this.totalPrice = data.totalPrice; 
      this.getCartPrice();
    });;
  }

  getCartPrice(){
    if(this.totalPrice>=200)
      this.transportPrice=0;
    return this.cartPrice=this.totalPrice+this.transportPrice;
  }
}
