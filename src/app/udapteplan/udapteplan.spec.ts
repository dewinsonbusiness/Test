import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Udapteplan } from './udapteplan';

describe('Udapteplan', () => {
  let component: Udapteplan;
  let fixture: ComponentFixture<Udapteplan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Udapteplan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Udapteplan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
