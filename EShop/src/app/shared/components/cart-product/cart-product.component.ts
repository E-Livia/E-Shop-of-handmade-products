import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/ProductService';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {

  constructor(private product:ProductService) { }

  productList:any[]=[];
  
  ngOnInit(): void {
    this.productList=this.product.getProducts();
  }

}
