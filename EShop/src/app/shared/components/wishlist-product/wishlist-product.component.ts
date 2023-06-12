import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';
import { CartServiceService } from 'src/app/core/services/cart-service.service';
import { WishlistServiceService } from 'src/app/core/services/wishlist-service.service';

@Component({
  selector: 'app-wishlist-product',
  templateUrl: './wishlist-product.component.html',
  styleUrls: ['./wishlist-product.component.scss']
})
export class WishlistProductComponent implements OnInit {
  loggedInUsername:string;
  ProductList: any = [];

  constructor(private router:Router, private wishlistService:WishlistServiceService, private authService:AuthServiceService, private cartService:CartServiceService) {
    this.loggedInUsername=this.authService.getLoggedInUsername();
   }


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

  moveToCart(productId:number){
    this.cartService.addToCart(this.loggedInUsername, productId).subscribe(
      response => {
        console.log("Adaugare cu succes:", response);
        this.router.navigate(['/cart']);
      },
      error => {
        console.error("Eroare la adaugare");
      }
    )
    this.removeFormWishlist(productId);
    this.router.navigate(['/cart']);
  }

  removeFormWishlist(productId:number){
    this.wishlistService.removeFromWishlist(this.loggedInUsername, productId).subscribe(
      response => {
        console.log("Stergere cu succes:", response);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/wishlist']);
        });
      },
      error => {
        console.error("Eroare la stergere");
      }
    )
  }
}
