import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/core/services/category-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  selectedCategory:string='';
  constructor(private categoryService:CategoryServiceService, private router:Router) { }

  ngOnInit(): void {
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
}
