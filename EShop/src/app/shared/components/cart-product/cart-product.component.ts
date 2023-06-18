import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';
import { CartServiceService } from 'src/app/core/services/cart-service.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {  
    ProductList: any = [];
    loggedInUsername:string;

  constructor(private cartService:CartServiceService, private authService:AuthServiceService, private router:Router) {
    this.loggedInUsername=this.authService.getLoggedInUsername();
   }

  ngOnInit(): void {
    this.refreshProductList();
  }

  refreshProductList() {
    this.cartService.getClientCart(this.loggedInUsername).subscribe(data => {
      this.ProductList = data;
    });
  }

  removeFromCart(productId:number){
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

  selectProduct(productId: number) {
    this.router.navigate(['product-details',productId]);
  }

}
