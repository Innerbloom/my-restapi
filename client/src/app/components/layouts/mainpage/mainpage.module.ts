import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainpageRoutingModule } from './mainpage-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MainpageDashboardComponent } from './components/mainpage.dashboard/mainpage.dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        HomeComponent,
        MainpageDashboardComponent,
        SidebarComponent
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        MainpageRoutingModule
    ]
})
export class MainpageModule { }
