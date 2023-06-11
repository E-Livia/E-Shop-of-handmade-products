import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/core/services/category-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
// obj!:Interface;
  selectedCategory:string='';
  constructor(private categoryService:CategoryServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.categoryService.setSelectedCategory(category);
  }

  goToTutorials(){
    this.router.navigate(['tutorials']);
  }
}
