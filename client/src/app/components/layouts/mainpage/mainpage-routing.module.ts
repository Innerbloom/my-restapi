import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainpageDashboardComponent} from "./components/mainpage.dashboard/mainpage.dashboard.component";
import {HomeComponent} from "./components/home/home.component";
import {AuthGuard} from "../../../guards/auth.guard";
import {LogsComponent} from "./components/logs/logs.component";
import {LogoutComponent} from "./components/logout/logout.component";



const routes: Routes = [
  {path: '', component: MainpageDashboardComponent, canActivate: [AuthGuard],
    children: [
      {path: 'logout', component: LogoutComponent},
      {path : 'home', component: HomeComponent, canActivate: [AuthGuard]},
      {path : '', redirectTo: 'home', pathMatch: 'full'}
    ]
  },
  {path: 'logs', component: LogsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainpageRoutingModule { }
