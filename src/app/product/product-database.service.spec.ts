import { TestBed } from '@angular/core/testing';

import { ProductDatabaseService } from './product-database.service';

describe('ProductDatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductDatabaseService = TestBed.get(ProductDatabaseService);
    expect(service).toBeTruthy();
  });
});
