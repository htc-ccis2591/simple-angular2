import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { DiscService } from './disc.service';
import { DashboardComponent } from './dashboard.component';
import { DiscsComponent } from './discs.component';
import { DiscDetailComponent } from './disc-detail.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Discs']">Discs</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    DiscService
  ]
})
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'DiscDetail',
    component: DiscDetailComponent
  },
  {
    path: '/discs',
    name: 'Discs',
    component: DiscsComponent
  }
])
export class AppComponent {
  title = 'Tour of some Disc Golf Discs';
}