import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/ProductService';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private product:ProductService) { }

  tabelProduse: string[] = [];

  ngOnInit(): void {
    this.tabelProduse=this.product.getNames();
  }
}
