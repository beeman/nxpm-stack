import { Controller } from '@nestjs/common'

import { ApiDataAccessAuthService } from './api-data-access-auth.service'

@Controller()
export class ApiDataAccessAuthController {
  constructor(private readonly auth: ApiDataAccessAuthService) {}
}
