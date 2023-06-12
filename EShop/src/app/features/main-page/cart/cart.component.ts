import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';
import { CartServiceService } from 'src/app/core/services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  loggedInUsername:string;
  totalPrice:number=0;
  transportPrice:number=15;
  cartPrice:number=0;

  constructor(private router:Router, private cartService:CartServiceService,private authService:AuthServiceService) {
    this.loggedInUsername=this.authService.getLoggedInUsername();
   }
  
  continueShopping(){
    this.router.navigate(['/main-page']);
  }

  proceedOrder(){
    this.router.navigate(['cart/order-details']);
  }


  ngOnInit(): void {
    this.getTotalPrice();
  }

  getTotalPrice(){
    return this.cartService.getClientTotalPrice(this.loggedInUsername)
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
