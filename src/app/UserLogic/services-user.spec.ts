import { TestBed } from '@angular/core/testing';

import { ServicesUser } from './services-user';

describe('ServicesUser', () => {
  let service: ServicesUser;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesUser);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
