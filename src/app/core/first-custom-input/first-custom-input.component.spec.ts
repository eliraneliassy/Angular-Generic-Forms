import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCustomInputComponent } from './first-custom-input.component';

describe('FirstCustomInputComponent', () => {
  let component: FirstCustomInputComponent;
  let fixture: ComponentFixture<FirstCustomInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstCustomInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstCustomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
