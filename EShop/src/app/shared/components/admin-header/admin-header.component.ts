import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
  goToAboutPage() {
    this.router.navigate(['admin-main-page/admin-about']);
  }

  goToAccountPage(){
    this.router.navigate(['admin-main-page/admin-profile']);
  }

  goToWishlistPage(){
    this.router.navigate(['admin-main-page/admin-wishlist']);
  }

  goToCartPage(){
    this.router.navigate(['admin-main-page/admin-cart']);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
