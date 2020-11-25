import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { AdminDataAccessCoreModule } from '@nxpm-stack/admin/data-access-core'
import { AdminFeatureAboutComponent } from './admin-feature-about.component'

@NgModule({
  declarations: [AdminFeatureAboutComponent],
  imports: [
    CommonModule,
    AdminDataAccessCoreModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: AdminFeatureAboutComponent }]),
  ],
})
export class AdminFeatureAboutModule {}
