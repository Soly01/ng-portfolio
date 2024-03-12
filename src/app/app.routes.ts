import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about.component').then(
        (c) => c.AboutComponent
      ),
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./components/portfolio/portfolio.component').then(
        (c) => c.PortfolioComponent
      ),
    children: [
      {
        path: 'all',
        loadComponent: () =>
          import('./components/portfolio/all/all.component').then(
            (c) => c.AllComponent
          ),
      },
      {
        path: 'angular',
        loadComponent: () =>
          import('./components/portfolio/angular/angular.component').then(
            (c) => c.AngularComponent
          ),
      },
      {
        path: 'java',
        loadComponent: () =>
          import('./components/portfolio/java/java.component').then(
            (c) => c.JavaComponent
          ),
      },
      {
        path: 'temp',
        loadComponent: () =>
          import('./components/portfolio/temp/temp.component').then(
            (c) => c.TempComponent
          ),
      },
    ],
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./components/contact/contact.component').then(
        (c) => c.ContactComponent
      ),
  },
];
