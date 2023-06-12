import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ProductServiceService } from 'src/app/core/services/product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  selectedProduct: number=0;
  product:any=[];

  constructor(private route: ActivatedRoute,private productService: ProductServiceService) { }

  ngOnInit(): void {
    //used ActivatedRoute to get the productId from url
    this.route.paramMap.subscribe(params => {
      const productId = params.get('productId');
      console.log(productId);
      if (productId !== null) {
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
}