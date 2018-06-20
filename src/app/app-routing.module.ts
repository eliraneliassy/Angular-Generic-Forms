import { ReusableFormsComponent } from './reusable-forms/reusable-forms.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { FirstComponent } from './first/first.component';
import { ResuableFormsValueAccesorComponent } from './reusable-forms/resuable-forms-value-accesor/resuable-forms-value-accesor.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reusable-forms', component: ReusableFormsComponent },
  { path: 'first', component: FirstComponent },
  { path: 'reusable-forms-value-accessor', component: ResuableFormsValueAccesorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
