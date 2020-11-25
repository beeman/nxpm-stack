import { Resolver } from '@nestjs/graphql'

import { ApiDataAccessAuthService } from './api-data-access-auth.service'

@Resolver()
export class ApiDataAccessAuthResolver {
  constructor(private readonly service: ApiDataAccessAuthService) {}
}
