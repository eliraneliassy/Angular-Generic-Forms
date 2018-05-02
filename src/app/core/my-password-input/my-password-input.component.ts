import { Component, OnInit, ViewChild, ElementRef, Self } from '@angular/core';
import { ControlValueAccessor, Validator, AbstractControl, ValidatorFn, Validators, NgControl } from '@angular/forms';

@Component({
  selector: 'app-my-password-input',
  templateUrl: './my-password-input.component.html',
  styleUrls: ['./my-password-input.component.scss']
})
export class MyPasswordInputComponent implements OnInit, ControlValueAccessor, Validator {

  @ViewChild('password') password: ElementRef;
  disabled;

  constructor(@Self() public controlDir: NgControl) { }

  ngOnInit() {
    this.controlDir.valueAccessor = this;

    const control = this.controlDir.control;
    const validators: ValidatorFn[] = control.validator ? [control.validator] : [];
    validators.push(Validators.required);

    control.setValidators(validators);
    control.updateValueAndValidity();
  }
  onChange(event) { }

  onTouched() { }

  writeValue(obj: any): void {
    this.password.nativeElement.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validate(c: AbstractControl): { [key: string]: any; } {
    const validators: ValidatorFn[] = [];
    validators.push(Validators.required);

    return validators;
  }

}
