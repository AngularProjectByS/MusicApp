import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home';
import { Register } from './components/register/register';
import { Login } from './components/login/login.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'register',
        component: Register
    },
    {
        path: 'login',
        component: Login
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);