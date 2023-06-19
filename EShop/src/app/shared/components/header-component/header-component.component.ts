import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ProductServiceService } from 'src/app/core/services/product-service.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {
  searchText: string = '';
  productList:any;
  private insertedSearch = new BehaviorSubject<any>('');
  selectedCategory$ = this.insertedSearch.asObservable();
  
  constructor(private router: Router, private productService:ProductServiceService) { }
  
  goToAboutPage() {
    this.router.navigate(['/about']);
  }

  goToAccountPage(){
    this.router.navigate(['/profile']);
  }

  goToWishlistPage(){
    this.router.navigate(['/wishlist']);
  }

  goToCartPage(){
    this.router.navigate(['/cart']);
  }


  ngOnInit(): void {
  }

  setTextForSearch(){
    this.productService.setSearchText(this.searchText);
    this.router.navigate(['main-page']);
  }

}
