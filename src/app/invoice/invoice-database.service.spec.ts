import { TestBed } from '@angular/core/testing';

import { InvoiceDatabaseService } from './invoice-database.service';

describe('InvoiceDatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvoiceDatabaseService = TestBed.get(InvoiceDatabaseService);
    expect(service).toBeTruthy();
  });
});
