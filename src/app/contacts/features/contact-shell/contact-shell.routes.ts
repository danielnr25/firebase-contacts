import { Routes } from "@angular/router";

export default [
  {
    path:'dashboard',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../contact-dashboard/contact-dashboard.component'),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
] as Routes;
