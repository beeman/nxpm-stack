import { Injectable } from '@angular/core'
import { ApolloAngularSDK, LoginInput, RegisterInput } from '@nxpm-stack/admin/data-access-core'
import { map } from 'rxjs/operators'

@Injectable()
export class AdminDataAccessAuthService {
  constructor(public readonly sdk: ApolloAngularSDK) {}

  login(input: LoginInput) {
    return this.sdk.login({ input }).pipe(map((res) => res?.data?.login))
  }

  register(input: RegisterInput) {
    return this.sdk.register({ input }).pipe(map((res) => res?.data?.register))
  }
}
