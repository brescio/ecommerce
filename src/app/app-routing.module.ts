import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuardService } from './core/guards/login-guard.service';


const routes: Routes = [
  { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./features/signup/signup.module').then(m => m.SignupModule) },
  { path: 'customize', loadChildren: () => import('./features/customize/customize.module').then(m => m.CustomizeModule) },
  { path: 'customize/:id', loadChildren: () => import('./features/customize/customize.module').then(m => m.CustomizeModule) },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule), canLoad: [LoginGuardService] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'cart', loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

