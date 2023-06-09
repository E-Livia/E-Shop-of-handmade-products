import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist-product',
  templateUrl: './wishlist-product.component.html',
  styleUrls: ['./wishlist-product.component.scss']
})
export class WishlistProductComponent implements OnInit {

  constructor(private router:Router) { }

  ProductList: any = [];

  ngOnInit(): void {
  }

  goToProductDetails(){
    this.router.navigateByUrl('/product-details');
  }

  goToCartPage(){
    this.router.navigate(['/cart']);
  }

  goToWishlistPage(){
    this.router.navigate(['/wishlist']);
  }


}
