import { TestBed } from '@angular/core/testing';

import { EncfServices } from './encf-services';

describe('EncfServices', () => {
  let service: EncfServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncfServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
