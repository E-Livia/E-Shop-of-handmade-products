import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/core/services/category-service.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  categoryName!:string;

  constructor(private router:Router, private catService:CategoryServiceService) { }

  ngOnInit(): void {
  }

  goToMainPage(){
    this.catService .selectedCategory$.subscribe(category=>{
      this.categoryName=category;
      if(this.categoryName){
        this.router.navigate(['main-page/category',this.categoryName])
      }else{
        this.router.navigate(['/main-page']);
      }
    })
  }

}
