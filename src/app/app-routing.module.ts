import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeComponent} from './home/home.component';
// import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  // {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'dashboard',component:DashboardComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
