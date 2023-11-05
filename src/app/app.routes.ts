import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'NgUI',
        loadComponent: () => import('./pages/landing/landing.component')
    },
    {
        path: 'block',
        title: 'blocks',
        loadComponent: () => import('./pages/blocks/blocks.component')
    },
    {
        path: 'templates',
        title: 'templates',
        loadComponent: () => import('./pages/templates/templates.component')
    },
    {
        path: 'guide',
        title: 'guide',
        loadComponent: () => import('./pages/guide/guide.component')
    },
];
