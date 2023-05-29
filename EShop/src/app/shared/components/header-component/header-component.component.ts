import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {
  goToAboutPage() {
    this.router.navigate(['/about']);
  }

  goToAccountPage(){
    this.router.navigate(['/profile']);
  }

  goToWishlistPage(){
    this.router.navigate(['/wishlist']);
  }

  goToCartPage(){
    this.router.navigate(['/cart']);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
