import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminMainPageRoutingModule } from './admin-main-page-routing.module';
import { AdminMainPageComponent } from './admin-main-page/admin-main-page.component';


@NgModule({
  declarations: [
    AdminMainPageComponent
  ],
  imports: [
    CommonModule,
    AdminMainPageRoutingModule
  ]
})
export class AdminMainPageModule { }
