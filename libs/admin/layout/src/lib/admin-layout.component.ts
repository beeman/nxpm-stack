import { Component } from '@angular/core'

@Component({
  template: `
    <!-- This flex container takes the full height -->
    <div class="d-flex flex-column h-100">
      <layout-header
        [logo]="appLogo"
        [linksLeft]="linksLeft"
        [linksRight]="linksRight"
        [name]="appName"
      ></layout-header>
      <!-- The main area does not shrink, 'pushing down' the footer -->
      <main class="flex-shrink-0">
        <!-- This will render the routes -->
        <router-outlet></router-outlet>
      </main>
      <!-- This keeps the footer down if the main content does not fill up the space -->
      <footer class="mt-auto">
        <layout-footer [html]="footerHtml"></layout-footer>
      </footer>
    </div>
  `,
})
export class AdminLayoutComponent {
  appLogo = '/assets/images/logo.png'
  appName = 'Admin'
  footerHtml = `Copyright &copy; ${new Date().getFullYear()}`
  linksLeft: { label: string; route: string }[] = [{ label: 'Dashboard', route: '/dashboard' }]
  linksRight: { label: string; route: string }[] = [
    { label: 'About', route: '/about' },
    { label: 'Logout', route: '/logout' },
  ]
}
