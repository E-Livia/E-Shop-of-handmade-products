import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMainPageComponent } from './admin-main-page/admin-main-page.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminCartComponent } from './admin-cart/admin-cart.component';
import { AdminWishlistComponent } from './admin-wishlist/admin-wishlist.component';
import { AdminAboutComponent } from './admin-about/admin-about.component';
import { OrderDetailsComponent } from 'src/app/shared/components/order-details/order-details.component';

const routes: Routes = [
  {
    path:'',
    component:AdminMainPageComponent
  },
  {
    path:'admin-main-page',
    component:AdminMainPageComponent
  },
  {
    path:'admin-profile',
    component:AdminProfileComponent
  },
  {
    path:'admin-cart',
    component:AdminCartComponent
  },
  {
    path:'admin-wishlist',
    component:AdminWishlistComponent
  },
  {
    path:'admin-about',
    component:AdminAboutComponent
  },
  {
    path:'admin-cart/order-details',
    component:OrderDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminMainPageRoutingModule { }
