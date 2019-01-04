import { Injectable } from '@angular/core';
import { Customer } from './customer-list/customer.component';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerDatabaseService {
  private apiUrl = 'http://localhost:8000/api';
  private customerUrl = '/customers';

  constructor(
    private http: HttpClient
  ) { }

  // Add new customer into database
  addCustomer(customer: Customer): Promise<Customer> {
    const completeUrl = this.apiUrl + this.customerUrl;
    return this.http.post<Customer>(completeUrl, customer)
               .toPromise()
               .then(result => result as Customer);
  }

  // Get data from database....
  getCustomers(): Promise<Customer[]> {
    return this.http.get('http://localhost:8000/api/customers')
                .toPromise()
                .then(responce => responce as Customer[]);
  }

  // Get Customers details by ID
  getCustomerDetails(url: string): Promise<Customer> {
    const completeUrl = this.apiUrl + url;
    return this.http.get(completeUrl)
                    .toPromise()
                    .then(result => result as Customer);
  }

  // Update customer
  updateCustomer(url: string, customer: Customer): Promise<Customer> {
    const completeUrl = this.apiUrl + url;
    return this.http.put<Customer>(completeUrl, customer)
                    .toPromise()
                    .then(result => result as Customer);
  }

  // Delete customer
  deleteCustomer(url: string): Promise<Customer> {
    const completeUrl = this.apiUrl + url;
    return this.http.delete(completeUrl)
               .toPromise()
               .then(result => result as Customer);
  }
}
