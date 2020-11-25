import { Module } from '@nestjs/common'

import { ApiDataAccessCoreService } from './api-data-access-core.service'

@Module({
  providers: [ApiDataAccessCoreService],
  exports: [ApiDataAccessCoreService],
})
export class ApiDataAccessCoreModule {}
