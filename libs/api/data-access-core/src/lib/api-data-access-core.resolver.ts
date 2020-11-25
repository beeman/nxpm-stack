import { Resolver } from '@nestjs/graphql'

import { ApiDataAccessCoreService } from './api-data-access-core.service'

@Resolver()
export class ApiDataAccessCoreResolver {
  constructor(private readonly service: ApiDataAccessCoreService) {}
}
