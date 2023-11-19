import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'all-tasks', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', loadChildren: () => import("./components/login/login.module").then(m => m.LoginModule) },
  { path: 'all-tasks', loadChildren: () => import("./components/product-grid/product-grid.module").then(m => m.ProductGridModule) },
  { path: 'profile', loadChildren: () => import("./components/profile/profile.module").then(m => m.ProfileModule) },
  { path: 'cart', loadChildren: () => import("./components/cart/cart.module").then(m => m.CartModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
