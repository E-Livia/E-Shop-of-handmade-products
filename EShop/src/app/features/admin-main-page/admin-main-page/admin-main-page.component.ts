import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/core/services/category-service.service';
import { ProductServiceService } from 'src/app/core/services/product-service.service';

@Component({
  selector: 'app-admin-main-page',
  templateUrl: './admin-main-page.component.html',
  styleUrls: ['./admin-main-page.component.scss']
})
export class AdminMainPageComponent implements OnInit {
  selectedCategory:string='';
  categoryList:any;
  parentCategory:string='';
  parentList:any;
  productName: string='';

  //for modal
  isVisible=false;
  isConfirmLoading=false;
  isVisibleCat=false;
  isVisibleDeleteProduct=false;

  constructor(private categoryService:CategoryServiceService
    ,private router:Router, private productService:ProductServiceService) { }

  ngOnInit(): void {
    this.getParentsForCategories();
    this.getCategoryByParent(this.parentCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.categoryService.setSelectedCategory(category);
    this.router.navigate(['admin-main-page/category/',category])
  }

  goToTutorials(){
    this.router.navigate(['admin-main-page/admin-tutorials']);
  }

  allProducts(){
    this.categoryService.setSelectedCategory("");
    this.router.navigate(['admin-main-page']);
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

  product = new FormGroup({
    name: new FormControl("", Validators.required),
    description: new FormControl(""),
    price: new FormControl("", Validators.required),
    credits: new FormControl(""),
    imagePath:new FormControl(""),
    categoryName:new FormControl("", Validators.required)
  });


  showModal():void{
    this.isVisible=true;
  }

  submitForm(){
    if (this.product.valid) {
      this.productService.addProduct(this.product.value).subscribe(
        response => {
          console.log("Produs adaugat cu succes:", response);
          alert("Inregistrare cu succes!");
          this.isVisible=false;
        },
        error => {
          console.error(error);
        }
      );
    } else {
      console.log(this.product.value);
      alert("Formular invalid!");
        }
  }

  handleOk(): void {
    this.submitForm();
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  category = new FormGroup({
    categoryName: new FormControl("",Validators.required),
    categoryParent: new FormControl("",Validators.required)
  });

  showCatModal():void{
    this.isVisibleCat=true;
  }

  submitFormCat(){
    if(this.category.valid)
   {
    this.categoryService.addCategory(this.category.value).subscribe(
      response => {
        console.log("Categorie adaugata cu succes:", response);
        alert("Inregistrare cu succes!");
        this.isVisible=false;
      },
      error => {
        console.error(error);
      }
    );
   }else {
    console.log(this.product.value);
    alert("Formular invalid!");
      }

  }

  handleOkCat(): void {
    this.submitFormCat();
  }

  handleCancelCat(): void {
    this.isVisibleCat = false;
  }


  showModalDeleteProduct():void{
    this.isVisibleDeleteProduct=true;
  }
  handleCancelDeleteProduct(): void {
    this.isVisibleDeleteProduct = false;
  }
  handleOkDeleteProduct(): void {
    this.submitFormDeleteProduct();
  }
  submitFormDeleteProduct(){
    if (this.productName) {
      this.productService.deleteProduct(this.productName).subscribe(
        response => {
          console.log("Produs sters cu succes:", response);
          alert("Stergere cu succes!");
          this.isVisible=false;
        },
        error => {
          console.error(error);
        }
      );
    } else {
      console.log(this.product.value);
      alert("Formular invalid!");
        }
  }
}
