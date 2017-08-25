import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { CashFlowRoutingModule } from './cash-flow-routing.module';
import { CashFlowComponent } from './cash-flow.component';
import { FlowTableComponent } from './flow-table/flow-table.component';

@NgModule({
  imports: [
    CommonModule,
    CashFlowRoutingModule,
    SharedModule
  ],
  declarations: [
    CashFlowComponent,
    FlowTableComponent
  ]
})
export class CashFlowModule { }
