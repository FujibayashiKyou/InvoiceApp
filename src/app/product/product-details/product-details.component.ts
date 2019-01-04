import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product-list/product.component';
import { ProductDatabaseService } from '../product-database.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product = {id: null, name: null, price: null};

  constructor(
    private service: ProductDatabaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.service.getProductDetails(this.router.url).then(result => this.getDetails(result));
  }

  // Get details
  private getDetails(product: Product) { this.product = product; }
}
