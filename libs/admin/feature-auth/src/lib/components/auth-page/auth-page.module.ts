import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AdminUiFormModule } from '@nxpm-stack/admin/ui-form'
import { AuthPageComponent } from './auth-page.component'

@NgModule({
  declarations: [AuthPageComponent],
  imports: [CommonModule, RouterModule, AdminUiFormModule],
  exports: [AuthPageComponent],
})
export class AuthPageModule {}
