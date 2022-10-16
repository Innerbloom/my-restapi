import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainpageDashboardComponent} from "./components/mainpage.dashboard/mainpage.dashboard.component";
import {HomeComponent} from "./components/home/home.component";
import {AuthGuard} from "../../../guards/auth.guard";


const routes: Routes = [
  {path: '', component: MainpageDashboardComponent, canActivate: [AuthGuard],
    children: [
      {path : 'home', component: HomeComponent, canActivate: [AuthGuard], canDeactivate: [AuthGuard]},
      {path : '', redirectTo: 'home', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainpageRoutingModule { }
