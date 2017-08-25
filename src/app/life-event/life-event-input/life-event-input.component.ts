import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Human } from '../../shared/service/family/human';
import { NgForm } from '@angular/forms';
import { LifeEvent } from '../../shared/service/life-event/life-event';
import * as UUID from 'uuid';
import { LifeEventService } from '../../shared/service/life-event/life-event.service';

@Component({
  selector: 'fp-life-event-input',
  templateUrl: './life-event-input.component.html',
  styleUrls: ['./life-event-input.component.css']
})
export class LifeEventInputComponent implements OnInit {

  @Input() family: Human[];

  constructor(private lifeEventService: LifeEventService) { }

  ngOnInit() {}

  onSubmit(form: NgForm): void {
    const newEvent = {
      uuid: UUID.v4(),
      year: form.value.year,
      familyPerson: form.value.familyPerson,
      eventName: form.value.eventName,
      money: form.value.money,
      timestamp: new Date()
    };
    this.lifeEventService.add(newEvent);
    form.reset();
  }

}
