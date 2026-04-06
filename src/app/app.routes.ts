import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AuthForm } from './auth/auth-form/auth-form';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'auth', component: AuthForm },
];
