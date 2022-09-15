import { TestBed } from '@angular/core/testing';

import { ServicetirService } from './servicetir.service';

describe('ServicetirService', () => {
  let service: ServicetirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicetirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
