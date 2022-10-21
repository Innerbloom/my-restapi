import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/layouts/login/login.component';
import { NotFoundComponent } from './components/layouts/not-found/not-found.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { RegComponent } from './components/layouts/reg/reg.component';
import { LogsComponent } from './components/layouts/mainpage/components/logs/logs.component';
import {MainpageModule} from "./components/layouts/mainpage/mainpage.module";
import {LogoutComponent} from "./components/layouts/mainpage/components/logout/logout.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    RegComponent,
    LogsComponent,
    LogoutComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
        ReactiveFormsModule,
        MainpageModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
