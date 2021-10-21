import { TestBed } from '@angular/core/testing';

import { CallDbService } from './call-db.service';

describe('CallDbService', () => {
  let service: CallDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
