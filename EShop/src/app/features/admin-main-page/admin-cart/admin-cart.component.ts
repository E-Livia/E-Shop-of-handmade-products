import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-cart',
  templateUrl: './admin-cart.component.html',
  styleUrls: ['./admin-cart.component.scss']
})
export class AdminCartComponent implements OnInit {
  continueShopping(){
    this.router.navigate(['/admin-main-page']);
  }

  proceedOrder(){
    this.router.navigate(['admin-main-page/admin-cart/order-details']);
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
