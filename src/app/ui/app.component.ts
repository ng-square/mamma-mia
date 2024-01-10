import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core'
import { NavigationEnd, Router, RouterModule } from '@angular/router'
import {
  BalApp,
  BalFooter,
  BalNavbarBundle,
  BalTabsBundle,
} from '@baloise/design-system-components-angular/standalone'
import { RouterAdapter } from '@interfaces/adapters/RouterAdapter'
import { I18nStore } from '@interfaces/stores/I18nStore'
import { filter } from 'rxjs'

type TabValue = 'home' | 'checkout'

@Component({
  standalone: true,
  imports: [RouterModule, BalApp, BalFooter, BalNavbarBundle, BalTabsBundle],
  selector: 'app-root',
  template: `<bal-app class="has-sticky-footer">
    <header>
      <bal-navbar interface="app">
        <bal-navbar-brand>Mamamia Pizza</bal-navbar-brand>
        <bal-navbar-menu>
          <bal-navbar-menu-start class="is-justify-content-flex-start">
            <bal-tabs
              interface="navbar"
              inverted
              [value]="tabValue"
              (balChange)="tabChanged($event)"
            >
              <bal-tab-item value="home" label="Pizzas"></bal-tab-item>
              <bal-tab-item value="checkout" label="Checkout"></bal-tab-item>
            </bal-tabs>
          </bal-navbar-menu-start>
          <bal-navbar-menu-end></bal-navbar-menu-end>
        </bal-navbar-menu>
      </bal-navbar>
    </header>
    <main class="container my-large">
      <router-outlet></router-outlet>
    </main>
    <bal-footer></bal-footer>
  </bal-app> `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  private i18nStore = inject(I18nStore)
  private router = inject(Router)
  private routerAdapter = inject(RouterAdapter)

  tabValue: TabValue = 'home'

  ngOnInit(): void {
    this.i18nStore.setup()

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const { url } = event as NavigationEnd
        if (url === '/') {
          this.tabValue = 'home'
        } else {
          this.tabValue = 'checkout'
        }
      })
  }

  tabChanged(tabEvent: BalEvents.BalTabsChange) {
    const newTabValue = tabEvent.detail as TabValue
    if (this.tabValue !== newTabValue) {
      if (newTabValue === 'home') {
        this.routerAdapter.goToHome()
      }
      if (newTabValue === 'checkout') {
        this.routerAdapter.goToCheckout()
      }
    }
  }
}
