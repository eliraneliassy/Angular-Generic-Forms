import { Address } from './../../core/address-form/address';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {

  addressForm: FormGroup;
  address: Address;
  constructor() { }

  ngOnInit() {
    this.addressForm = new FormGroup({});
    this.addressForm.addControl('v2', new FormControl());

  }

  submit() {
    console.log(this.addressForm.value);
  }


}
