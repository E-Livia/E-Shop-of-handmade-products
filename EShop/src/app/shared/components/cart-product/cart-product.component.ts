import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/core/services/shared-service.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {
  constructor(private service: SharedServiceService) { }

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
