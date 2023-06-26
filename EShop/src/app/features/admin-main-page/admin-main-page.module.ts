import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminMainPageRoutingModule } from './admin-main-page-routing.module';
import { AdminMainPageComponent } from './admin-main-page/admin-main-page.component';
import { AdminCartComponent } from './admin-cart/admin-cart.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminWishlistComponent } from './admin-wishlist/admin-wishlist.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { AdminAboutComponent } from './admin-about/admin-about.component';
import { AdminTutorialsComponent } from './admin-tutorials/admin-tutorials.component';
import { AdminCategoryMainPageComponent } from './admin-category-main-page/admin-category-main-page.component';

@NgModule({
  declarations: [
    AdminMainPageComponent,
    AdminCartComponent,
    AdminProfileComponent,
    AdminWishlistComponent,
    AdminAboutComponent,
    AdminTutorialsComponent,
    AdminCategoryMainPageComponent
  ],
  imports: [
    CommonModule,
    AdminMainPageRoutingModule,
    SharedModule
  ]
})
export class AdminMainPageModule { }
