import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { AdminDataAccessAuthModule } from '@nxpm-stack/admin/data-access-auth'
import { AdminUiFormModule } from '@nxpm-stack/admin/ui-form'
import { AuthPageModule } from '../components/auth-page/auth-page.module'
import { LogoutComponent } from './logout.component'

const routes: Routes = [{ path: '', component: LogoutComponent }]

@NgModule({
  declarations: [LogoutComponent],
  imports: [CommonModule, RouterModule.forChild(routes), AdminUiFormModule, AuthPageModule, AdminDataAccessAuthModule],
})
export class LogoutModule {}
