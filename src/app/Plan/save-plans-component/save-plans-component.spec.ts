import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePlansComponent } from './save-plans-component';

describe('SavePlansComponent', () => {
  let component: SavePlansComponent;
  let fixture: ComponentFixture<SavePlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavePlansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
