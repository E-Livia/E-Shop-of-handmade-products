import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from 'src/app/core/services/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private service: ProductServiceService, private router: Router) { }

  ProductList: any = [];

  ngOnInit(): void {
    this.refreshProductList();
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

  refreshProductList() {
    this.service.getProductList().subscribe(data => {
      this.ProductList = data;
    });
  }
}
