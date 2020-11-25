import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { AdminDataAccessCoreModule } from '@nxpm-stack/admin/data-access-core'
import { AdminFeatureDashboardComponent } from './admin-feature-dashboard.component'

@NgModule({
  declarations: [AdminFeatureDashboardComponent],
  imports: [
    CommonModule,
    AdminDataAccessCoreModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: AdminFeatureDashboardComponent,
      },
    ]),
  ],
})
export class AdminFeatureDashboardModule {}
