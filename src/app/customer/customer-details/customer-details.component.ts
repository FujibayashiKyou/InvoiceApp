import { Component, OnInit, Inject } from '@angular/core';
import { Customer } from '../customer-list/customer.component';
import { CustomerDatabaseService } from '../customer-database.service';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DialogDataComponent } from './dialog-data/dialog-data';
import { DialogDeleteDataComponent } from './dialog-delete-data/dialog-delete-data';

// This is only for dialog component
export interface DialogData { oldCustomer: Customer; newCustomer: Customer; }

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customer: Customer = {id: null, name: null, address: null, phone: null};
  oldCustomer: Customer = {id: null, name: null, address: null, phone: null};

  // Redirect to <http://localhost:4000/customers>
  private redirectUrl = '/customers';

  constructor(
    private service: CustomerDatabaseService,
    private router: Router,
    private dialog: MatDialog,
    private snack: MatSnackBar
  ) {}

  ngOnInit() {
    // Get data from database
    this.service.getCustomerDetails(this.router.url)
                .then(result => this.getDetails(result));
  }

  // Get information about customer. We need oldCustomer, for comparing, if User want to update some information about Customer
  private getDetails(customer: Customer) {
    this.clone(customer, this.oldCustomer);
    this.clone(customer, this.customer);
  }

  // Method for lazy clone of customer objects
  private clone(customer: Customer, clone: Customer) {
    clone.id = customer.id; clone.name = customer.name; clone.address = customer.address; clone.phone = customer.phone;
  }

  // Method for compare our customers objects
  private compare(oldCustomer: Customer, currentCustomer: Customer): boolean {
    return oldCustomer.name === currentCustomer.name &&
           oldCustomer.phone === currentCustomer.phone &&
           oldCustomer.address === currentCustomer.address;
  }

  /*  =============== Handle buttons click ===================== */
  // Update information about customer
  onSave(customer: Customer) {

    // Check objects, is they are same? If yes - only return, without save;
    const isSame = this.compare(this.oldCustomer, customer);
    if (isSame) {
      this.snack.open('There is now changes. Do changes first...', 'Ok')._dismissAfter(3000);
      return;
    }

    // Create dialog
    const dialogRef = this.dialog.open(DialogDataComponent, {
      width: '800px',
      data: { oldCustomer: this.oldCustomer,
              newCustomer: customer }
    });

    // Actions after dialog close
    dialogRef.afterClosed().subscribe( result => {

      // If we have new Customer -> update database, else -> return old values
      if (result) {
        this.service.updateCustomer(this.router.url, result); // Update customer in database
        this.snack.open('Update complete!', 'Success')._dismissAfter(3000);
      } else {
        this.clone(this.oldCustomer, this.customer); // Return old values into inputs
        this.snack.open('All changes were discard', 'Ok')._dismissAfter(3000);
      }
    });

  }

  // Delete Customer from database
  onDelete(customer: Customer) {
    // Open dialog for final check before delete
    const dialogRef = this.dialog.open(DialogDeleteDataComponent, {
      width: '500px',
      data: customer
    });

    // Waiting for answer
    dialogRef.afterClosed().subscribe( result => {
      // If we have result, this is mean that we need to delete customer
      if (result) {
        this.service.deleteCustomer(this.router.url); // Delete customer from database
        this.service.updateData(result); // Show to service that we want to update data
        setTimeout(() => { this.router.navigate([this.redirectUrl]); }, 150); // Redirect to Customers-table
      } else { console.log('Nothing return'); }
    });
  }

  // Discard all changes and go back
  onBack() {
    this.snack.open('All changes were discard', 'Ok')._dismissAfter(3000);
    this.router.navigate([this.redirectUrl]);
  }
}


