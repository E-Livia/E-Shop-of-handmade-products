import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { CategoryMainPageComponent } from './category-main-page/category-main-page.component';
import { UpdateClientInfoComponent } from './update-client-info/update-client-info.component';

@NgModule({
  declarations: [
    MainPageComponent,
    ProfileComponent,
    WishlistComponent,
    CartComponent,
    AboutComponent,
    TutorialsComponent,
    CategoryMainPageComponent,
    UpdateClientInfoComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    SharedModule
  ]
})
export class MainPageModule { }
