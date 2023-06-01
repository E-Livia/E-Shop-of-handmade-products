import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from './core/guards/role.guard';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=>import('./features/main-page/main-page.module').then((m)=>m.MainPageModule)
  },
  {
    path:'main-page',
    loadChildren: ()=>import('./features/main-page/main-page.module').then((m)=>m.MainPageModule)
  },
  {
    path:'auth',
    loadChildren: ()=> import('./features/auth/auth.module').then((m)=>m.AuthModule)
  },
  {
    path:'admin-main-page',
    loadChildren: ()=>import('./features/admin-main-page/admin-main-page.module').then((m)=>m.AdminMainPageModule)
    ,canActivate:[AuthGuard, RoleGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
