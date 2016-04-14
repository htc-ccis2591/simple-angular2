import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Disc } from './disc';
import { DiscService } from './disc.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  discs: Disc[] = [];

  constructor(
    private _router: Router,
    private _discService: DiscService) {
  }

  ngOnInit() {
    this._discService.getDiscs()
      .then(discs => this.discs = discs.slice(1,5));
  }

  gotoDetail(disc: Disc) {
    let link = ['DiscDetail', { id: disc.id }];
    this._router.navigate(link);
  }
}