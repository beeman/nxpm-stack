import { createAction, props } from '@ngrx/store'
import { LoginInput, RegisterInput, UserToken } from '@nxpm-stack/admin/data-access-core'

export const login = createAction('[Auth] Login', props<{ input: LoginInput }>())

export const loginSuccess = createAction('[Auth] Login Success', props<{ data: UserToken }>())

export const loginFailure = createAction('[Auth] Login Failure', props<{ error: any }>())

export const logout = createAction('[Auth] Logout')

export const register = createAction('[Auth] Register', props<{ input: RegisterInput }>())

export const registerSuccess = createAction('[Auth] Register Success', props<{ data: UserToken }>())

export const registerFailure = createAction('[Auth] Register Failure', props<{ error: any }>())
