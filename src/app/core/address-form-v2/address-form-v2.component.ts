import { FormGroup, ControlValueAccessor, FormControl, Validators, NG_VALUE_ACCESSOR, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-form-v2',
  templateUrl: './address-form-v2.component.html',
  styleUrls: ['./address-form-v2.component.scss'],
   providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: AddressFormV2Component
  }
  ]
})
export class AddressFormV2Component implements OnInit, ControlValueAccessor {


  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'firstName': [null, [Validators.required]],
      'lastName': [null, [Validators.required]],
      'phone': [null, null],
      'street': [null, [Validators.required]],
      'city': [null, [Validators.required]],
      'state': [null],
      'zip': [null, [Validators.required]],
    });
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
