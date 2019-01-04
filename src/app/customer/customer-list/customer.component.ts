import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CustomerDatabaseService } from '../customer-database.service';

export interface Customer {
  id: number;
  name: string;
  address: string;
  phone: string;
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {
  displayedColumns: string[] = [ 'id', 'name', 'address', 'phone' ];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private http: HttpClient,
    private service: CustomerDatabaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getData();
    console.log('Customer list created');
}

  // Get data from Customers database
  private getData() {
    this.service.getCustomers().then(result => { this.dataSource.data = result; console.log(result); } );
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  // Redirect to information page
  getCustomerDetails(customer: Customer) {
    const customerId = customer ? customer.id : null;
    this.router.navigateByUrl('/customers/' + customer.id);
  }

}
