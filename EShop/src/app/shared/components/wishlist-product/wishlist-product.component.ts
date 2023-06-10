import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';
import { WishlistServiceService } from 'src/app/core/services/wishlist-service.service';

@Component({
  selector: 'app-wishlist-product',
  templateUrl: './wishlist-product.component.html',
  styleUrls: ['./wishlist-product.component.scss']
})
export class WishlistProductComponent implements OnInit {
  loggedInUsername:string;

  constructor(private router:Router, private wishlistService:WishlistServiceService, private authService:AuthServiceService) {
    this.loggedInUsername=this.authService.getLoggedInUsername();
   }

  ProductList: any = [];

  ngOnInit(): void {
    this.displayWishlist();
  }

  displayWishlist(){
    this.wishlistService.getClientWishlist(this.loggedInUsername).subscribe(data => {
      this.ProductList = data;
    });
  }

  goToProductDetails(){
    this.router.navigateByUrl('/product-details');
  }

  moveToCart(){
    //to do
    // this.router.navigate(['/cart']);
  }

  removeFormWishlist(){
    //to do
  }
}
