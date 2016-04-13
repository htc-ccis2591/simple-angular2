import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Disc } from './disc';
import { DiscService } from './disc.service';

@Component({
  selector: 'my-disc-detail',
  templateUrl: 'app/disc-detail.component.html',
  styleUrls: ['app/disc-detail.component.css']
})
export class DiscDetailComponent implements OnInit {
  @Input() disc: Disc;

  constructor(
    private _discService: DiscService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._discService.getDisc(id)
      .then(disc => this.disc = disc);
  }

  goBack() {
    window.history.back();
  }
}