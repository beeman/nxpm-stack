import { Action, createReducer, on } from '@ngrx/store'
import { User } from '@nxpm-stack/admin/data-access-core'

import * as AuthActions from './auth.actions'

export const AUTH_FEATURE_KEY = 'auth'

export interface State {
  user?: User
  token?: string
  error?: string
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: State
}

export const initialState: State = {}

const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({ ...state })),
  on(AuthActions.loginSuccess, (state, { data }) => ({
    ...data,
    user: data.user,
    token: data.token,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({ ...state, error })),
  on(AuthActions.register, (state) => ({ ...state })),
  on(AuthActions.registerSuccess, (state, { data }) => ({
    ...data,
    user: data.user,
    token: data.token,
  })),
  on(AuthActions.registerFailure, (state, { error }) => ({ ...state, error })),
  on(AuthActions.logout, (state) => ({
    ...state,
    user: null,
    token: null,
    error: null,
  })),
)

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action)
}
