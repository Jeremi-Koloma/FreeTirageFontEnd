import { TestBed } from '@angular/core/testing';

import { TirageserviceService } from './tirageservice.service';

describe('TirageserviceService', () => {
  let service: TirageserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TirageserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
