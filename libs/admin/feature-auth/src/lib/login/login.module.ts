import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { AdminDataAccessAuthModule } from '@nxpm-stack/admin/data-access-auth'
import { AdminUiFormModule } from '@nxpm-stack/admin/ui-form'
import { AuthPageModule } from '../components/auth-page/auth-page.module'
import { LoginComponent } from './login.component'

const routes: Routes = [{ path: '', component: LoginComponent }]

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, RouterModule.forChild(routes), AdminUiFormModule, AuthPageModule, AdminDataAccessAuthModule],
})
export class LoginModule {}
