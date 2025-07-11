import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Saveplan } from './saveplan';

describe('Saveplan', () => {
  let component: Saveplan;
  let fixture: ComponentFixture<Saveplan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Saveplan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Saveplan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
