import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
