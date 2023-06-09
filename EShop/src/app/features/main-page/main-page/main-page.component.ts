import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/core/services/category-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
// obj!:Interface;
  selectedCategory:string='';
  constructor(private categoryService:CategoryServiceService) { }

  ngOnInit(): void {
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.categoryService.setSelectedCategory(category);
  }
}
