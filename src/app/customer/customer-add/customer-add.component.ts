import { MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer-list/customer.component';
import { CustomerDatabaseService } from '../customer-database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-add',
  templateUrl: 'customer-add.component.html',
  styleUrls: ['customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  newCustomer: Customer = {id: null, name: null, phone: null, address: null};

  private redirectToCustomers = '/customers';

  constructor(
    private service: CustomerDatabaseService,
    private snack: MatSnackBar,
    private router: Router
  ) { }

  // Init
  ngOnInit() {
  }

  // 'Save' button press
  onSave(customer: Customer) {
    // Adding customer to database, and redirect to main table
    this.service.addCustomer(customer).then(result => this.router.navigate([this.redirectToCustomers]));
    this.snack.open('New customer has beed added...', 'Success')._dismissAfter(3000);
  }

  // 'Back' button press
  onBack() {
    this.router.navigate([this.redirectToCustomers]);
    this.snack.open('All changes were discard...', 'Ok')._dismissAfter(3000);
  }
}
