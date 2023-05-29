import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/core/services/shared-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private service: SharedServiceService, private router: Router) { }

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
