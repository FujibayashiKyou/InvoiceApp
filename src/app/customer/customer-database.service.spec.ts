import { TestBed } from '@angular/core/testing';

import { CustomerDatabaseService } from './customer-database.service';

describe('CustomerDatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerDatabaseService = TestBed.get(CustomerDatabaseService);
    expect(service).toBeTruthy();
  });
});
