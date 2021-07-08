import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HealthCheckComponent } from './modules/health-check/health-check.component';
import { PostsComponent } from './modules/posts/posts.component';
import { UrlRedirectsComponent } from './modules/url-redirects/url-redirects.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'posts',
    component: PostsComponent
  }, {
    path: 'healthcheck',
    component: HealthCheckComponent
  }, {
    path: 'urlredirects',
    component: UrlRedirectsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
