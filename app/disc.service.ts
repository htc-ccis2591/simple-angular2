import { Disc } from './disc';
import { DISCS } from './mock-discs';
import { Injectable } from 'angular2/core';

@Injectable()
export class DiscService {
  getDiscs() {
    return Promise.resolve(DISCS);
  }

  // See the "Take it slow" appendix
  getDiscsSlowly() {
    return new Promise<Disc[]>(resolve =>
      setTimeout(()=>resolve(DISCS), 2000) // 2 seconds
    );
  }

  getDisc(id: number) {
    return Promise.resolve(DISCS).then(
      discs => discs.filter(disc => disc.id === id)[0]
    );
  }
}