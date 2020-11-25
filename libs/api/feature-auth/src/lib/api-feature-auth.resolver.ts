import {
  ApiDataAccessAuthService,
  CtxUser,
  GqlAuthGuard,
  LoginInput,
  RegisterInput,
  User,
  UserToken,
} from '@nxpm-stack/api/data-access-auth'
import { Float, Query, Resolver, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'

@Resolver(() => UserToken)
export class ApiFeatureAuthResolver {
  constructor(private readonly service: ApiDataAccessAuthService) {}

  @Query(() => User, { nullable: true })
  @UseGuards(GqlAuthGuard)
  async me(@CtxUser() user: User) {
    return user
  }

  @Mutation(() => UserToken, { nullable: true })
  async register(@Args('input') input: RegisterInput) {
    return this.service.register(input)
  }

  @Mutation(() => UserToken, { nullable: true })
  async login(@Args('input') input: LoginInput) {
    return this.service.login(input)
  }

  @ResolveField('user')
  user(@Parent() auth: UserToken) {
    return this.service.getUserFromToken(auth.token)
  }
}
