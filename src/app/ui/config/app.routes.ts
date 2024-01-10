import { Route } from '@angular/router'

export const appRoutes: Route[] = [
  {
    path: '',
    title: 'Home',
    loadComponent: () =>
      import('../pages/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'checkout',
    title: 'Checkout',
    loadComponent: () =>
      import('../pages/checkout.component').then((m) => m.CheckoutComponent),
  },
]
