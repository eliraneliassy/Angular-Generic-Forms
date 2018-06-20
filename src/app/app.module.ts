import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GenericInputComponent } from './core/generic-input/generic-input.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReusableFormsComponent } from './reusable-forms/reusable-forms.component';
import { Form1Component } from './reusable-forms/form1/form1.component';
import { Form2Component } from './reusable-forms/form2/form2.component';
import { AddressFormComponent } from './core/address-form/address-form.component';
import { MyPasswordInputComponent } from './core/my-password-input/my-password-input.component';
import { AddressFormV2Component } from './core/address-form-v2/address-form-v2.component';
import { FirstCustomInputComponent } from './core/first-custom-input/first-custom-input.component';
import { FirstComponent } from './first/first.component';
import { ResuableFormsValueAccesorComponent } from './reusable-forms/resuable-forms-value-accesor/resuable-forms-value-accesor.component';


@NgModule({
  declarations: [
    AppComponent,
    GenericInputComponent,
    LoginComponent,
    RegisterComponent,
    ReusableFormsComponent,
    Form1Component,
    Form2Component,
    AddressFormComponent,
    MyPasswordInputComponent,
    AddressFormV2Component,
    FirstCustomInputComponent,
    FirstComponent,
    ResuableFormsValueAccesorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
