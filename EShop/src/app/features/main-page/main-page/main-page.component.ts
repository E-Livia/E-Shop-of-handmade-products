import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/core/services/category-service.service';
import { ProductServiceService } from 'src/app/core/services/product-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  selectedCategory:string='';
  categoryList:any;
  parentCategory:string='';
  parentList:any;
  constructor(private categoryService:CategoryServiceService, private router:Router, private productService:ProductServiceService) { }

  ngOnInit(): void {
    this.getParentsForCategories();
    this.getCategoryByParent(this.parentCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.categoryService.setSelectedCategory(category);
    this.router.navigate(['main-page/category',category])
  }

  goToTutorials(){
    this.router.navigate(['tutorials']);
  }

  allProducts(){
    this.categoryService.setSelectedCategory("");
    this.router.navigate(['main-page']);
  }

  getParentsForCategories(){
    this.categoryService.getParentsForCategories().subscribe(data => {
      this.parentList = data;
      console.log(this.parentList);

      for (let i = 0; i < this.parentList.length; i++) {
        const parentCategory = this.parentList[i].categoryParent;
        this.getCategoryByParent(parentCategory);
      }
    });
  }

  getCategoryByParent(parentCategory:string){
    this.categoryService.getCategoryByParent(parentCategory).subscribe(data => {
      if (!this.categoryList) {
        this.categoryList = {};
      }
      this.categoryList[parentCategory] = data;
      console.log(this.categoryList);
    });
  
  }

  orderByNameAsc():void{
    this.productService.setShouldOrderByNameAsc(true);
  }

  implicitOrder():void{
    this.productService.setShouldOrderImplicit(true);
  }

  orderByNameDesc():void{
    this.productService.setShouldOrderByNameDesc(true);
  }
}
