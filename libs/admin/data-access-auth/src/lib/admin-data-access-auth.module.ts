import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { AuthEffects } from './+state/auth/auth.effects'
import * as fromAuth from './+state/auth/auth.reducer'
import { AdminDataAccessAuthService } from './admin-data-access-auth.service'
import { IsLoggedInGuard } from './guards/is-logged-in.guard'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature(fromAuth.AUTH_FEATURE_KEY, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [AdminDataAccessAuthService, IsLoggedInGuard],
})
export class AdminDataAccessAuthModule {}
