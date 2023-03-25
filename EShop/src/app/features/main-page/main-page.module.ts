import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page/main-page.component';

import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    NzButtonModule
  ]
})
export class MainPageModule { }
