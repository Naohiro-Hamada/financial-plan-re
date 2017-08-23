import { Component, OnInit } from '@angular/core';

import { ExpenseService } from '../../shared/service/expense/expense.service';
import { Expense } from '../../shared/service/expense/expense';

@Component({
  selector: 'fp-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  private base: Expense;
  private residence: Expense;
  private vehicle: Expense;
  private education: Expense;
  private insurance: Expense;
  private another: Expense;

  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.base = this.expenseService.base;
    this.residence = this.expenseService.residence;
    this.vehicle = this.expenseService.vehicle;
    this.education = this.expenseService.education;
    this.insurance = this.expenseService.insurance;
    this.another = this.expenseService.another;
  }

  calcTotalExpenses(): number {
    return this.expenseService.totalExpenses;
  }
}
