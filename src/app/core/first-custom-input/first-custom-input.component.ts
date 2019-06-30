import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first-custom-input',
  templateUrl: './first-custom-input.component.html',
  styleUrls: ['./first-custom-input.component.scss']
})
export class FirstCustomInputComponent {

  @Input() type = 'text';
  @Input() isRequired: boolean = false;
  @Input() pattern: string = null;
  @Input() label: string = null;
  @Input() placeholder: string;
  @Input() errorMsg: string;

}
