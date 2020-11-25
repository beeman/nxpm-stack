import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminDataAccessAuthModule, IsLoggedInGuard } from '@nxpm-stack/admin/data-access-auth'
import { AdminDataAccessCoreModule } from '@nxpm-stack/admin/data-access-core'
import { AdminLayoutComponent } from '@nxpm-stack/admin/layout'

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [IsLoggedInGuard],
    children: [
      // Application routes here
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'about',
        loadChildren: () => import('@nxpm-stack/admin/feature-about').then((m) => m.AdminFeatureAboutModule),
      },
      {
        path: 'dashboard',
        loadChildren: () => import('@nxpm-stack/admin/feature-dashboard').then((m) => m.AdminFeatureDashboardModule),
      },
    ],
  },
  {
    path: 'not-found',
    loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },
  {
    path: '',
    loadChildren: () => import('@nxpm-stack/admin/feature-auth').then((m) => m.AdminFeatureAuthModule),
  },
  { path: '**', redirectTo: '/not-found' },
]

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes), AdminDataAccessCoreModule, AdminDataAccessAuthModule],
})
export class AdminFeatureShellModule {}
