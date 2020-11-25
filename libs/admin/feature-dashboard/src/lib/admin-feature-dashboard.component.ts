import { Component } from '@angular/core'
import { AdminDataAccessCoreService } from '@nxpm-stack/admin/data-access-core'

@Component({
  template: `
    <div class="container my-3 my-md-5">
      <div class="card">
        <div class="card-header">Dashboard</div>
        <div class="card-body">
          <pre>{{ me$ | async | json }}</pre>
        </div>
        <div class="card-footer">Server uptime: {{ uptime$ | async }}</div>
      </div>
    </div>
  `,
})
export class AdminFeatureDashboardComponent {
  public uptime$ = this.data.uptimeWatch()
  public me$ = this.data.me()
  constructor(private readonly data: AdminDataAccessCoreService) {}
}
