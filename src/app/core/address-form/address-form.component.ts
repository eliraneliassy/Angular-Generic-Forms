
import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Address } from './address';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class AddressFormComponent implements OnInit {

  @Input() address: Address;
  form: FormGroup;
  constructor(
    private ctrlContainer: FormGroupDirective,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.ctrlContainer.form;

    this.form.addControl('addressForm',
      this.formBuilder.group({
        'firstName': [null, [Validators.required]],
        'lastName': [null, [Validators.required]],
        'phone': [null, null],
        'street': [null, [Validators.required]],
        'city': [null, [Validators.required]],
        'state': [null],
        'zip': [null, [Validators.required]],
      }));

    console.log(this.form);
  }

  isInvalid(controlName: string): boolean {

    return (<FormGroup>this.form.controls['addressForm']).controls[controlName].touched
      && (<FormGroup>this.form.controls['addressForm']).controls[controlName].invalid;
  }

  isValid(controlName: string): boolean {
    return (<FormGroup>this.form.controls['addressForm']).controls[controlName].touched
      && (<FormGroup>this.form.controls['addressForm']).controls[controlName].valid;
  }

}
