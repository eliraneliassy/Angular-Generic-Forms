import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressFormV2Component } from './address-form-v2.component';

describe('AddressFormV2Component', () => {
  let component: AddressFormV2Component;
  let fixture: ComponentFixture<AddressFormV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressFormV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressFormV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
