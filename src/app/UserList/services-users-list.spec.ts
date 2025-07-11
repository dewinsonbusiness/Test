import { TestBed } from '@angular/core/testing';

import { ServicesUsersList } from './services-users-list';

describe('ServicesUsersList', () => {
  let service: ServicesUsersList;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesUsersList);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
