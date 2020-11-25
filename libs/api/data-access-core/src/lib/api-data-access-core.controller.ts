import { Controller } from '@nestjs/common'

import { ApiDataAccessCoreService } from './api-data-access-core.service'

@Controller()
export class ApiDataAccessCoreController {
  constructor(private readonly auth: ApiDataAccessCoreService) {}
}
