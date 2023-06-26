import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/core/services/category-service.service';

@Component({
  selector: 'app-admin-wishlist',
  templateUrl: './admin-wishlist.component.html',
  styleUrls: ['./admin-wishlist.component.scss']
})
export class AdminWishlistComponent implements OnInit {
  categoryName!:string;

  constructor(private router:Router,private catService:CategoryServiceService) { }

  ngOnInit(): void {
  }

  goToMainPage(){
    this.catService .selectedCategory$.subscribe(category=>{
      this.categoryName=category;
      if(this.categoryName){
        this.router.navigate(['admin-main-page/category',this.categoryName])
      }else{
        this.router.navigate(['/admin-main-page']);
      }
    })
  }
}
