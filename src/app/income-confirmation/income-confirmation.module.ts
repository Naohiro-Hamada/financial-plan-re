import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IncomeConfirmationRoutingModule } from './income-confirmation-routing.module';
import { IncomeConfirmationComponent } from './income-confirmation.component';
import { ExpenseComponent } from './expense/expense.component';
import { IncomeComponent } from './income/income.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IncomeConfirmationRoutingModule,
    SharedModule
  ],
  declarations: [
    IncomeConfirmationComponent,
    ExpenseComponent,
    IncomeComponent
  ]
})
export class IncomeConfirmationModule { }
