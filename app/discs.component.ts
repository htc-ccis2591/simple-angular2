import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Disc } from './disc';
import { DiscDetailComponent } from './disc-detail.component';
import { DiscService } from './disc.service';




@Component({
  selector: 'my-discs',
  templateUrl: 'app/discs.component.html',
  styleUrls:  ['app/discs.component.css'],
  directives: [DiscDetailComponent]
})
export class DiscsComponent implements OnInit {
  discs: Disc[];
  selectedDisc: Disc;

  constructor(
    private _router: Router,
    private _discService: DiscService) { }

  getDiscs() {
    this._discService.getDiscs().then(discs => this.discs = discs);
  }

  ngOnInit() {
    this.getDiscs();
  }

  onSelect(disc: Disc) { this.selectedDisc = disc; }

  gotoDetail() {
    this._router.navigate(['DiscDetail', { id: this.selectedDisc.id }]);
  }
}