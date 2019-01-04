import { CustomerModule } from './customer/customer.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product-list/product.component';
import { CustomerComponent } from './customer/customer-list/customer.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DemoMaterialModule } from '../../material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InvoiceModule } from './invoice/invoice.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CustomerComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoMaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InvoiceModule,
    ProductModule,
    CustomerModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
