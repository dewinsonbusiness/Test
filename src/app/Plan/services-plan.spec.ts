import { TestBed } from '@angular/core/testing';

import { ServicesPlan } from './services-plan';

describe('ServicesPlan', () => {
  let service: ServicesPlan;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesPlan);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
