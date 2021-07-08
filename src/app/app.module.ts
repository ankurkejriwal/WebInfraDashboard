import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { CertificateDashboardComponent } from './modules/certificate-dashboard/certificate-dashboard.component';
import { LanIDDashboardComponent } from './modules/lan-iddashboard/lan-iddashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    CertificateDashboardComponent,
    LanIDDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
