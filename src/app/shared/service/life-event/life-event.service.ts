import { Injectable } from '@angular/core';
import { LifeEvent } from './life-event';

@Injectable()
export class LifeEventService {

  events: LifeEvent[];

  constructor() {
    this.events = [];
  }

  add(event: LifeEvent): void {

    this.events.push(event);
    this.events.sort((e1, e2) => e1.year - e2.year);
  }

  update(event: LifeEvent): void {
    let index: number;
    this.events.some((e, i, a) => {
      index = a.indexOf(e);
      return e.uuid === event.uuid;
    });

    if (index) {
      this.events[index] = event;
    }

    this.events.sort((e1, e2) => e1.year - e2.year);
  }

  get list(): LifeEvent[] {
    return this.events;
  }
}
