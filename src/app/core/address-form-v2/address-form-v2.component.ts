import { FormGroup, ControlValueAccessor } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-form-v2',
  templateUrl: './address-form-v2.component.html',
  styleUrls: ['./address-form-v2.component.scss']
})
export class AddressFormV2Component implements OnInit, ControlValueAccessor {


  form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  onTouched() {

  }

  writeValue(obj: any): void {
    obj && this.form.setValue(obj, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    this.form.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.form.disabled : this.form.enabled;
  }

}
