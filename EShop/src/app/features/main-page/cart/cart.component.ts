import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  continueShopping(){
    this.router.navigate(['/main-page']);
  }

  proceedOrder(){
    this.router.navigate(['cart/order-details']);
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
