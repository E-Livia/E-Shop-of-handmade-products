import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/core/services/product-service.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {
  constructor(private service: ProductServiceService) { }

  ProductList: any = [];

  ngOnInit(): void {
    this.refreshProductList();
  }

  refreshProductList() {
    this.service.getProductList().subscribe(data => {
      this.ProductList = data;
    });
  }

}
