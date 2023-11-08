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
        loadComponent: () => import('./pages/blocks/blocks.component'),
        children: [
            {
                path: 'hero-section',
                title: 'block-hero',
                loadComponent: () => import('./pages/blocks/hero-section-block/hero-section-block.component'),
            },
            {
                path: 'home-section',
                title: 'block-home',
                loadComponent: () => import('./pages/blocks/home-section-block/home-section-block.component'),
            },
            {
                path: '',
                redirectTo: 'home-section',
                pathMatch: 'full'
            }
        ]
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
