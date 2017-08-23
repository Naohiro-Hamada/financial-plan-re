import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './component/page-header/page-header.component';

import { ExpenseService } from './service/expense/expense.service';
import { IncomeService } from './service/income/income.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PageHeaderComponent],
  providers: [
    ExpenseService,
    IncomeService
  ],
  exports: [
    PageHeaderComponent
  ]
})
export class SharedModule { }
