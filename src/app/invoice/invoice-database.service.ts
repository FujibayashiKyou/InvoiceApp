import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invoice } from './invoice-list/invoice.component';

@Injectable({
  providedIn: 'root'
})
export class InvoiceDatabaseService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(
    private http: HttpClient
  ) { }

  // Get Invoice details from database by ID
  getInvoiceDetail(url: string): Promise<Invoice> {
    const modifyUrl = this.apiUrl + url;
    return this.http.get(modifyUrl)
             .toPromise()
             .then( result => result as Invoice );
  }
}
