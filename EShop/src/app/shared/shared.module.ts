import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzButtonModule,
    NzRadioModule,
    FormsModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzGridModule,
    NzInputModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:[
    NzButtonModule,
    NzRadioModule,
    FormsModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzGridModule,
    NzInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class SharedModule { }
