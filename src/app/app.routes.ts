import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent() {
      return import('./dashboard/dashboard').then((m) => m.Dashboard);
    },
  },
  {
    path: 'login',
    pathMatch: 'full',
    loadComponent() {
      return import('./login/login').then((m) => m.Login);
    },
  },
];
