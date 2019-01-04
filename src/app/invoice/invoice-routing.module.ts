import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceComponent } from './invoice-list/invoice.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'invoices', component: InvoiceComponent},
  {path: 'invoices/add-invoice', component: AddInvoiceComponent},
  {path: 'invoices/:id', component: InvoiceDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
