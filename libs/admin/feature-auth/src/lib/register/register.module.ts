import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { AdminDataAccessAuthModule } from '@nxpm-stack/admin/data-access-auth'
import { AuthPageModule } from '../components/auth-page/auth-page.module'
import { RegisterComponent } from './register.component'

const routes: Routes = [{ path: '', component: RegisterComponent }]

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, RouterModule.forChild(routes), AuthPageModule, AdminDataAccessAuthModule],
})
export class RegisterModule {}
