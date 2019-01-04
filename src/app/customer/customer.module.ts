import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';
import { DemoMaterialModule } from 'material-module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DialogDataComponent } from './customer-details/dialog-data/dialog-data';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';
import { DialogDeleteDataComponent } from './customer-details/dialog-delete-data/dialog-delete-data';

@NgModule({
  declarations: [CustomerAddComponent, CustomerDetailsComponent, DialogDataComponent, DialogDeleteDataComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    HttpClientModule,
    DemoMaterialModule,
    MatDialogModule,
    CustomerRoutingModule
  ],
  entryComponents: [DialogDataComponent, DialogDeleteDataComponent],
  providers: []
})

export class CustomerModule { }
