import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComoponent } from './create-comoponent';

describe('CreateComoponent', () => {
  let component: CreateComoponent;
  let fixture: ComponentFixture<CreateComoponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateComoponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateComoponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
