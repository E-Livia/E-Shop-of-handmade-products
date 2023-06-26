import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminCartServiceService } from 'src/app/core/services/admin-cart.service';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';
import { CartServiceService } from 'src/app/core/services/cart-service.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {
  ProductList: any = [];
  loggedInUsername: string;
  loggedInRole: string;

  constructor(private cartService: CartServiceService, private authService: AuthServiceService, private router: Router
    , private adminCartService: AdminCartServiceService) {
    this.loggedInUsername = this.authService.getLoggedInUsername();
    this.loggedInRole = this.authService.getLoggedInRole();
  }

  ngOnInit(): void {
    this.refreshProductList();
  }

  refreshProductList() {
    if (this.loggedInRole === 'admin') {
      this.adminCartService.getAdminCart(this.loggedInUsername).subscribe(data => {
        this.ProductList = data;
      });
    }
    else {
      this.cartService.getClientCart(this.loggedInUsername).subscribe(data => {
        this.ProductList = data;
      });
    }
  }

  removeFromCart(productId: number) {
    if (this.loggedInRole === 'admin') {
      this.adminCartService.removeFromAdminCart(this.loggedInUsername, productId).subscribe(
        response => {
          console.log("Stergere cu succes:", response);
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['admin-main-page/admin-cart']);
          });
        },
        error => {
          console.error("Eroare la stergere");
        }
      )
    }
    else {
      this.cartService.removeFromCart(this.loggedInUsername, productId).subscribe(
        response => {
          console.log("Stergere cu succes:", response);
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/cart']);
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


  increaseQuantity(productId: number) {
    if (this.loggedInRole === 'admin') {
      this.adminCartService.addToAdminCart(this.loggedInUsername, productId).subscribe(
        response => {
          console.log("Added successfully:", response);
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['admin-main-page/admin-cart']);
          });
        },
        error => {
          console.error("Error");
        }
      );
    }
    else {
      this.cartService.addToCart(this.loggedInUsername, productId).subscribe(
        response => {
          console.log("Added successfully:", response);
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/cart']);
          });
        },
        error => {
          console.error("Error");
        }
      );
    }
  }

  decreaseQuantity(productId: number) {
    if (this.loggedInRole === 'admin') {
      this.adminCartService.decreaseProductQuantity(this.loggedInUsername, productId).subscribe(
        response => {
          console.log("Stergere cu succes:", response);
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['admin-main-page/admin-cart']);
          });
        },
        error => {
          console.error("Eroare la stergere");
        }
      );
    }
    else {
      this.cartService.decreaseProductQuantity(this.loggedInUsername, productId).subscribe(
        response => {
          console.log("Stergere cu succes:", response);
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/cart']);
          });
        },
        error => {
          console.error("Eroare la stergere");
        }
      );
    }
  }
}
