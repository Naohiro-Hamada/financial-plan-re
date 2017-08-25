import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { FamilyService } from './shared/service/family/family.service';
import { ExpenseService } from './shared/service/expense/expense.service';
import { IncomeService } from './shared/service/income/income.service';
import { LifeEventService } from './shared/service/life-event/life-event.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ja-JP' },
    FamilyService,
    ExpenseService,
    IncomeService,
    LifeEventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
