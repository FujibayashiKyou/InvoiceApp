import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product-list/product.component';

@Injectable({
  providedIn: 'root'
})
export class ProductDatabaseService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(
    private http: HttpClient
  ) { }

  // Get Product details by ID
  getProductDetails(url: string): Promise<Product> {
    const modifyUrl = this.apiUrl + url;
    return this.http.get(modifyUrl)
                    .toPromise()
                    .then(result => result as Product);
  }
}
