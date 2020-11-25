import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { getAuthError, getAuthUser, login } from '@nxpm-stack/admin/data-access-auth'
import { AdminUiFormField } from '@nxpm-stack/admin/ui-form'
import { filter, take } from 'rxjs/operators'

@Component({
  template: `
    <auth-page
      #f
      [form]="form"
      [fields]="fields"
      pageTitle="Login"
      buttonTitle="Log in"
      [model]="model"
      (submit)="submit($event)"
    >
      <div class="error" *ngIf="getAuthError | async as error">
        {{ error }}
      </div>
      <a routerLink="/register" class="btn btn-outline-primary">Register</a>
    </auth-page>
  `,
})
export class LoginComponent {
  getAuthError = this.store.select(getAuthError)
  getAuthUser = this.store.select(getAuthUser)
  form = new FormGroup({})
  model = {}
  fields = [
    AdminUiFormField.email('email', { label: 'Email', required: true }, { focus: true }),
    AdminUiFormField.password('password', {
      label: 'Password',
      required: true,
    }),
  ]
  constructor(private readonly store: Store, private readonly router: Router) {
    this.getAuthUser
      .pipe(
        filter((user) => !!user),
        take(1),
      )
      .subscribe(() => this.router.navigate(['/']))
  }

  public submit(input) {
    this.store.dispatch(login({ input }))
  }
}
