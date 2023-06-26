import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminCartServiceService } from 'src/app/core/services/admin-cart.service';
import { AdminWishlistServiceService } from 'src/app/core/services/admin-wishlist.service';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';
import { CartServiceService } from 'src/app/core/services/cart-service.service';
import { WishlistServiceService } from 'src/app/core/services/wishlist-service.service';

@Component({
  selector: 'app-wishlist-product',
  templateUrl: './wishlist-product.component.html',
  styleUrls: ['./wishlist-product.component.scss']
})
export class WishlistProductComponent implements OnInit {
  loggedInUsername: string;
  ProductList: any = [];
  loggedInRole: string;

  constructor(private router: Router, private wishlistService: WishlistServiceService, private authService: AuthServiceService, private cartService: CartServiceService
    , private adminWishlistService: AdminWishlistServiceService, private adminCartService:AdminCartServiceService) {
    this.loggedInUsername = this.authService.getLoggedInUsername();
    this.loggedInRole = this.authService.getLoggedInRole();
  }


  ngOnInit(): void {
    this.displayWishlist();
  }

  displayWishlist() {

    if (this.loggedInRole === 'admin') {

      this.adminWishlistService.getAdminWishlist(this.loggedInUsername).subscribe(data => {
        this.ProductList = data;
        console.log(this.loggedInRole)
      });
    }
    else {
      this.wishlistService.getClientWishlist(this.loggedInUsername).subscribe(data => {
        this.ProductList = data;
      });
    }
  }

  goToProductDetails() {
    this.router.navigateByUrl('/product-details');
  }

  moveToCart(productId: number) {
    if (this.loggedInRole === 'admin') {
      this.adminCartService.addToAdminCart(this.loggedInUsername, productId).subscribe(
        response=>{
          console.log("Adaugare cu succes:", response);
          this.router.navigate(['admin-main-page/admin-cart']);
        },
        error => {
          console.error("Eroare la adaugare");
        }
      )
      this.removeFormWishlist(productId);
      this.router.navigate(['admin-main-page/admin-cart']);
    }
    else {
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
  }

  removeFormWishlist(productId: number) {
    if (this.loggedInRole === 'admin') {
      this.adminWishlistService.removeFromWishlist(this.loggedInUsername, productId).subscribe(
        response => {
          console.log("Stergere cu succes:", response);
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['admin-main-page/admin-wishlist']);
          });
        },
        error => {
          console.error("Eroare la stergere");
        }
      )
    }
    else {
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

  selectProduct(productId: number) {
    this.router.navigate(['product-details', productId]);
  }
}
