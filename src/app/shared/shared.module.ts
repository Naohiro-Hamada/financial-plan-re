import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './component/page-header/page-header.component';

import { FamilyService } from './service/family/family.service';
import { ExpenseService } from './service/expense/expense.service';
import { IncomeService } from './service/income/income.service';

import { RelationshipPipe } from './pipe/relationship/relationship.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PageHeaderComponent,
    RelationshipPipe
  ],
  providers: [
    FamilyService,
    ExpenseService,
    IncomeService
  ],
  exports: [
    PageHeaderComponent,
    RelationshipPipe
  ]
})
export class SharedModule { }
