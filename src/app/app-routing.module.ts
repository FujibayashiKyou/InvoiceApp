import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';
import { ProductComponent } from './product/product-list/product.component';
import { CustomerComponent } from './customer/customer-list/customer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/invoices', pathMatch: 'full' },
  {path: 'products', component: ProductComponent },
  {path: 'customers', component: CustomerComponent}
];

@NgModule ({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
