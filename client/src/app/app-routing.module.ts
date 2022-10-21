import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/layouts/login/login.component";
import {NotFoundComponent} from "./components/layouts/not-found/not-found.component";
import {AuthGuard} from "./guards/auth.guard";
import {RegComponent} from "./components/layouts/reg/reg.component";
import {LogsComponent} from "./components/layouts/mainpage/components/logs/logs.component";
import {LogoutComponent} from "./components/layouts/mainpage/components/logout/logout.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'reg', component: RegComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'mainpage',
    loadChildren: () => import('./components/layouts/mainpage/mainpage.module')
        .then((m) => m.MainpageModule)
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
