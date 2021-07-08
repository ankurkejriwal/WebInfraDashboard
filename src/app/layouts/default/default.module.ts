import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { UrlRedirectsComponent } from 'src/app/modules/url-redirects/url-redirects.component';
import { HealthCheckComponent } from 'src/app/modules/health-check/health-check.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    UrlRedirectsComponent,
    HealthCheckComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ]
})
export class DefaultModule { }
