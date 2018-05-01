import { Address } from './../../core/address-form/address';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {

  addressForm: FormGroup;
  address: Address;
  constructor() { }

  ngOnInit() {
    this.addressForm = new FormGroup({});
  }

  onSubmit() {
    console.log(this.addressForm.value);
  }

}
