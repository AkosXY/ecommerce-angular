import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', loadChildren: () => import("./components/login/login.module").then(m => m.LoginModule) },
  { path: 'all-tasks', loadChildren: () => import("./components/task-grid/task-grid.module").then(m => m.TaskGridModule) },
  { path: 'profile', loadChildren: () => import("./components/profile/profile.module").then(m => m.ProfileModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
