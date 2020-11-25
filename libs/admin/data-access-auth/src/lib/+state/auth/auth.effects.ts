import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { fetch } from '@nrwl/angular'
import { map } from 'rxjs/operators'
import { AdminDataAccessAuthService } from '../../admin-data-access-auth.service'
import * as AuthActions from './auth.actions'

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.login),
      fetch({
        run: ({ input }) => this.service.login(input).pipe(map((data) => AuthActions.loginSuccess({ data }))),
        onError: (action, error) => {
          console.error('Error', error)
          return AuthActions.loginFailure({ error: error.message })
        },
      }),
    )
  })

  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.register),
      fetch({
        run: ({ input }) => this.service.register(input).pipe(map((data) => AuthActions.registerSuccess({ data }))),
        onError: (action, error) => {
          console.error('Error', error)
          return AuthActions.registerFailure({ error: error.message })
        },
      }),
    )
  })

  constructor(private readonly actions$: Actions, private readonly service: AdminDataAccessAuthService) {}
}
