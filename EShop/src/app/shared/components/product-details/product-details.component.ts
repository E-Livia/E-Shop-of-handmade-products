import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  selectedProduct: number=0;
  product:any=[];
  loggedInUsername:string;
  prodId: number=0;

  constructor(private route: ActivatedRoute,private productService: ProductServiceService
    ,private cartService:CartServiceService, private router:Router
    ,private authService:AuthServiceService
    ,private wishlistService:WishlistServiceService) {
      this.loggedInUsername=this.authService.getLoggedInUsername();
     }

  ngOnInit(): void {
    //used ActivatedRoute to get the productId from url
    this.route.paramMap.subscribe(params => {
      const productId = params.get('productId');
      console.log(productId);
      if (productId !== null) {
        this.prodId=+productId;
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

  addToCart(){
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

  addToWishlist(){
    console.log(this.prodId);
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