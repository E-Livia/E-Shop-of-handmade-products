import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/core/services/category-service.service';
import { ProductServiceService } from 'src/app/core/services/product-service.service';
import { MainPageComponent } from 'src/app/features/main-page/main-page/main-page.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  categoryName!:string;

  constructor(private service: ProductServiceService, private router: Router, private catService:CategoryServiceService) { }

  ProductList: any = [];

  ngOnInit(): void {
    this.catService .selectedCategory$.subscribe(category=>{
      this.categoryName=category;
      if(this.categoryName){
        this.GetProductsByCategory(this.categoryName)
      }else{
        this.refreshProductList();
      }
    })
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

  GetProductsByCategory(category:string){
    this.service.getProductByCategory(category).subscribe(data=>{
      this.ProductList=data;
    })
  }
}
