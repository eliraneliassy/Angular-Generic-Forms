import { FormGroup, ControlValueAccessor, FormControl, Validators, NG_VALUE_ACCESSOR, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-form-v2',
  templateUrl: './address-form-v2.component.html',
  styleUrls: ['./address-form-v2.component.scss']
})
export class AddressFormV2Component implements OnInit {


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

}
