import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminCartServiceService } from 'src/app/core/services/admin-cart.service';
import { AdminWishlistServiceService } from 'src/app/core/services/admin-wishlist.service';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';
import { CartServiceService } from 'src/app/core/services/cart-service.service';
import { ProductServiceService } from 'src/app/core/services/product-service.service';
import { WishlistServiceService } from 'src/app/core/services/wishlist-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  selectedProduct: number = 0;
  product: any = [];
  loggedInUsername: string;
  loggedInRole: string;
  prodId: number = 0;

  constructor(private route: ActivatedRoute, private productService: ProductServiceService
    , private cartService: CartServiceService, private router: Router
    , private authService: AuthServiceService
    , private wishlistService: WishlistServiceService
    , private adminCartService: AdminCartServiceService
    ,private adminWishlistService:AdminWishlistServiceService) {
    this.loggedInUsername = this.authService.getLoggedInUsername();
    this.loggedInRole = this.authService.getLoggedInRole();
  }

  ngOnInit(): void {
    //used ActivatedRoute to get the productId from url
    this.route.paramMap.subscribe(params => {
      const productId = params.get('productId');
      console.log(productId);
      if (productId !== null) {
        this.prodId = +productId;
        this.getProductById(+productId);
      }
    });
  }

  getProductById(productId: number) {
    this.productService.getProductById(productId).subscribe(data => {
      this.product = data;
      console.log(this.product);
    });
  }

  addToCart() {
    if (this.loggedInRole === 'admin') {
      this.adminCartService.addToAdminCart(this.loggedInUsername, this.prodId).subscribe(
        response => {
          console.log("Adaugare cu succes:", response);
          this.router.navigate(['admin-main-page/admin-cart']);
        },
        error => {
          console.error("Eroare la adaugare");
        }
      )
    }
    else {
      this.cartService.addToCart(this.loggedInUsername, this.prodId).subscribe(
        response => {
          console.log("Adaugare cu succes:", response);
          this.router.navigate(['/cart']);
        },
        error => {
          console.error("Eroare la adaugare");
        }
      )
    }
  }

  addToWishlist() {
    if (this.loggedInRole === 'admin') {
      this.adminWishlistService.addToAdminWishlist(this.loggedInUsername, this.prodId).subscribe(
        response => {
          console.log("Adaugare cu succes:", response);
          this.router.navigate(['admin-main-page/admin-wishlist']);
        },
        error => {
          console.error("Eroare la adaugare");
        }
      )
    }
    else {
      this.wishlistService.addToWishlist(this.loggedInUsername, this.prodId).subscribe(
        response => {
          console.log("Adaugare cu succes:", response);
          this.router.navigate(['/wishlist']);
        },
        error => {
          console.error("Eroare la adaugare");
        }
      )
    }
  }
}