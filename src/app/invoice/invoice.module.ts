import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { InvoiceComponent } from './invoice-list/invoice.component';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';
import { DemoMaterialModule } from 'material-module';

@NgModule({
  declarations: [AddInvoiceComponent, InvoiceDetailComponent, InvoiceComponent],
  imports: [
    CommonModule,
    OverlayModule,
    HttpClientModule,
    DemoMaterialModule,
    InvoiceRoutingModule
  ]
})
export class InvoiceModule { }
