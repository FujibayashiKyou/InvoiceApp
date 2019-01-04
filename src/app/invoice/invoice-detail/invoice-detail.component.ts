import { Component, OnInit } from '@angular/core';
import { InvoiceDatabaseService } from '../invoice-database.service';
import { Router } from '@angular/router';
import { Invoice } from '../invoice-list/invoice.component';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {

  // Invoice item
  invoice: Invoice = {id: null, customer_id: null, discount: null, total: null};

  constructor(
    private service: InvoiceDatabaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.service.getInvoiceDetail(this.router.url).then(result => this.getDetails(result) );
  }

  // Getting data...
  private getDetails(invoice: Invoice) { this.invoice = invoice; }

}
