import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { LifeEventRoutingModule } from './life-event-routing.module';
import { LifeEventComponent } from './life-event.component';
import { LifeEventInputComponent } from './life-event-input/life-event-input.component';
import { LifeEventListComponent } from './life-event-list/life-event-list.component';
import { LifeEventDetailComponent } from './life-event-detail/life-event-detail.component';
import { LifeEventUpdateComponent } from './life-event-update/life-event-update.component';

@NgModule({
  imports: [
    CommonModule,
    LifeEventRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    LifeEventComponent,
    LifeEventInputComponent,
    LifeEventListComponent,
    LifeEventDetailComponent,
    LifeEventUpdateComponent
  ]
})
export class LifeEventModule { }
