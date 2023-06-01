import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ProfileComponent } from './profile/profile.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { ProductDetailsComponent } from 'src/app/shared/components/product-details/product-details.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    component:MainPageComponent
  },
  {
    path:'main-page',
    component:MainPageComponent
  },
  {
    path:'profile',
    component:ProfileComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'wishlist',
    component:WishlistComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'cart',
    component:CartComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'product-details',
    component:ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
