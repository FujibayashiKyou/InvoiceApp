import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';
import { DemoMaterialModule } from 'material-module';

@NgModule({
  declarations: [ProductDetailsComponent, ProductAddComponent],
  imports: [
    CommonModule,
    OverlayModule,
    HttpClientModule,
    DemoMaterialModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
