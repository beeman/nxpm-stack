import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { Store } from '@ngrx/store'
import { register } from '@nxpm-stack/admin/data-access-auth'
import { AdminUiFormField } from '@nxpm-stack/admin/ui-form'

@Component({
  template: `
    <auth-page #f [form]="form" [fields]="fields" pageTitle="Register" buttonTitle="Register" (submit)="submit($event)">
      <a routerLink="/login" class="btn btn-outline-primary">Log in</a>
    </auth-page>
  `,
})
export class RegisterComponent {
  form = new FormGroup({})
  fields = [
    AdminUiFormField.email('email', { label: 'Email', required: true }, { focus: true }),
    AdminUiFormField.password('password', {
      label: 'Password',
      required: true,
    }),
    AdminUiFormField.input('username', { label: 'Username', required: false }),
    AdminUiFormField.input('firstName', {
      label: 'First name',
      required: false,
    }),
    AdminUiFormField.input('lastName', { label: 'Last name', required: false }),
  ]

  constructor(private readonly store: Store) {}

  public submit(input) {
    this.store.dispatch(register({ input }))
  }
}
