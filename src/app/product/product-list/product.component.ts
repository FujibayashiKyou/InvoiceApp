import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';

export interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  displayedColumns: string[] = [ 'id', 'name', 'price' ];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.getProducts().then( result => this.dataSource.data = result );
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getProductDetails(product: Product) {
    const productId = product ? product.id : null;
    this.router.navigateByUrl('/products/' + productId);
  }

  // Get data from database
  private getProducts(): Promise<Product[]> {
    return this.http.get('http://localhost:8000/api/products')
               .toPromise()
               .then( responce => responce as Product[] );
  }

}
