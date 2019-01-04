import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';

export interface Invoice {
  id: number;
  customer_id: number;
  discount: number;
  total: number;
}

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  displayedColumns: string[] = [ 'id', 'customer_id', 'discount', 'total' ];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.getInvoices().then( result => this.dataSource.data = result );
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  // AddInvoice button
  public getInvoiceDetail(invoice: Invoice) {
    const invoiceId = invoice ? invoice.id : null;
    this.router.navigateByUrl('/invoices/' + invoiceId);
  }

  // Get Invoices from server
  private getInvoices(): Promise<Invoice[]> {
    return this.http.get('http://localhost:8000/api/invoices')
               .toPromise()
               .then( result => result as Invoice[] );
  }

}
