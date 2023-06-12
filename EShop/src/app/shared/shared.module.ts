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
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ProductComponent } from './components/product/product.component';
import { CartProductComponent } from './components/cart-product/cart-product.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { WishlistProductComponent } from './components/wishlist-product/wishlist-product.component';

@NgModule({
  declarations: [
    HeaderComponentComponent,
    ProductComponent,
    CartProductComponent,
    ProductDetailsComponent,
    AdminHeaderComponent,
    OrderDetailsComponent,
    WishlistProductComponent
  ],
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
    MatIconModule,
    NzDropDownModule,
    NzCollapseModule,
    NzCardModule,
    NzFormModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    NzPopoverModule
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
    MatIconModule,
    NzDropDownModule,
    NzCollapseModule,
    HeaderComponentComponent,
    NzCardModule,
    ProductComponent,
    CartProductComponent,
    NzFormModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    ProductDetailsComponent,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    AdminHeaderComponent,
    OrderDetailsComponent,
    WishlistProductComponent,
    NzPopoverModule
  ]
})
export class SharedModule { }
