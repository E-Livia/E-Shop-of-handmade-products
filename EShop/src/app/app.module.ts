import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ro_RO } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ro from '@angular/common/locales/ro';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(ro);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: NZ_I18N, useValue: ro_RO }],
  bootstrap: [AppComponent]
})
export class AppModule { }
