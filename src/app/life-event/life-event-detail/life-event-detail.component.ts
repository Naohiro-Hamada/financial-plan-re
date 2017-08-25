import { Component, OnInit, Input } from '@angular/core';
import { Human } from '../../shared/service/family/human';
import { LifeEvent } from '../../shared/service/life-event/life-event';

@Component({
  selector: 'fp-life-event-detail',
  templateUrl: './life-event-detail.component.html',
  styleUrls: ['./life-event-detail.component.css']
})
export class LifeEventDetailComponent implements OnInit {

  @Input() event: LifeEvent;
  @Input() family: Human[];

  edit: boolean;

  constructor() { }

  ngOnInit() {
    this.edit = false;
  }

  ageOfYear(birthday: Date, year: number): number {
    const current = new Date().getFullYear();
    return current - birthday.getFullYear() + year;
  }

  changeEvent() {
    this.edit = false;
  }

  onClick(): void {
    this.edit = true;
  }
}
