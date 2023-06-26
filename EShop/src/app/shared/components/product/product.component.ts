import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminCartServiceService } from 'src/app/core/services/admin-cart.service';
import { AdminWishlistServiceService } from 'src/app/core/services/admin-wishlist.service';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';
import { CartServiceService } from 'src/app/core/services/cart-service.service';
import { CategoryServiceService } from 'src/app/core/services/category-service.service';
import { ProductServiceService } from 'src/app/core/services/product-service.service';
import { WishlistServiceService } from 'src/app/core/services/wishlist-service.service';
import { MainPageComponent } from 'src/app/features/main-page/main-page/main-page.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  categoryName!: string;
  searchedProd!: string;
  loggedInUsername: string;
  ProductList: any = [];
  selectedProduct: number = 0;
  loggedInRole: string;

  constructor(
    private router: Router,
    private catService: CategoryServiceService,
    private cartService: CartServiceService,
    private authService: AuthServiceService,
    private wishlistService: WishlistServiceService,
    private productService: ProductServiceService,
    private adminWishlistService:AdminWishlistServiceService,
    private adminCartService:AdminCartServiceService) {
    this.loggedInUsername = this.authService.getLoggedInUsername();
    this.loggedInRole = this.authService.getLoggedInRole();
  }


  ngOnInit(): void {
    this.catService.selectedCategory$.subscribe(category => {
      this.categoryName = category;
      if (this.categoryName) {
        this.GetProductsByCategory(this.categoryName)
      } else {
        this.refreshProductList();
      }
    });
    this.productService.searchProd$.subscribe(inputText => {
      this.searchedProd = inputText;
      if (this.searchedProd) {
        this.getSearchProducts(this.searchedProd);
      }
    })
  }

  addToCart(productId: number) {
    if (this.loggedInRole === 'admin') {
      this.adminCartService.addToAdminCart(this.loggedInUsername, productId).subscribe(
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
      this.cartService.addToCart(this.loggedInUsername, productId).subscribe(
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

  addToWishlist(productId: number) {
    if (this.loggedInRole === 'admin') {
      console.log(productId);
      this.adminWishlistService.addToAdminWishlist(this.loggedInUsername, productId).subscribe(
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
      console.log(productId);
      this.wishlistService.addToWishlist(this.loggedInUsername, productId).subscribe(
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

  refreshProductList() {
    this.productService.getProductList().subscribe(data => {
      this.ProductList = data;
      console.log(this.ProductList)
    });
  }

  GetProductsByCategory(category: string) {
    this.productService.getProductByCategory(category).subscribe(data => {
      this.ProductList = data;
    })
  }

  selectProduct(productId: number) {
    this.router.navigate(['product-details', productId]);
  }

  getSearchProducts(searchText: string) {
    this.productService.searchProduct(searchText).subscribe(data => {
      this.ProductList = data;
    })
  }

}
