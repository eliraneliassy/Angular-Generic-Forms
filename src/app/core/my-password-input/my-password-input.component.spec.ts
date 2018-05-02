import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPasswordInputComponent } from './my-password-input.component';

describe('MyPasswordInputComponent', () => {
  let component: MyPasswordInputComponent;
  let fixture: ComponentFixture<MyPasswordInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPasswordInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPasswordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
