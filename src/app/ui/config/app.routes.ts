import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    title: 'Home',
    loadComponent: () =>
      import('../pages/home.component').then((m) => m.HomeComponent),
  },
];
