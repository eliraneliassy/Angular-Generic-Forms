import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResuableFormsValueAccesorComponent } from './resuable-forms-value-accesor.component';

describe('ResuableFormsValueAccesorComponent', () => {
  let component: ResuableFormsValueAccesorComponent;
  let fixture: ComponentFixture<ResuableFormsValueAccesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResuableFormsValueAccesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResuableFormsValueAccesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
