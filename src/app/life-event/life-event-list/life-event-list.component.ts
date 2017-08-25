import { Component, OnInit, Input } from '@angular/core';
import { Human } from '../../shared/service/family/human';
import { LifeEvent } from '../../shared/service/life-event/life-event';

@Component({
  selector: 'fp-life-event-list',
  templateUrl: './life-event-list.component.html',
  styleUrls: ['./life-event-list.component.css']
})
export class LifeEventListComponent implements OnInit {

  @Input() family: Human[];
  @Input() events: LifeEvent[];

  constructor() { }

  ngOnInit() {
  }
}
