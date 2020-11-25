import { ApiFeatureAuthModule } from '@nxpm-stack/api/feature-auth'
import { ApiFeatureCoreModule } from '@nxpm-stack/api/feature-core'
import { Module } from '@nestjs/common'

@Module({
  imports: [ApiFeatureAuthModule, ApiFeatureCoreModule],
})
export class AppModule {}
