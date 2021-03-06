import { Component, OnInit } from '@angular/core';
import { BalanceSheetItem } from '../shared/balance-sheet-item';
import { BalanceSheetService } from '../shared/balance-sheet.service';

@Component({
  selector: 'fp-liability',
  templateUrl: './liability.component.html',
  styleUrls: ['./liability.component.css'],
  providers: [BalanceSheetService]
})
export class LiabilityComponent implements OnInit {
  liabilities: BalanceSheetItem[];

  constructor(private balanceSheetService: BalanceSheetService) {}

  getLiabilities(): void {
    this.balanceSheetService.getLiabilities().then(liabilities => this.liabilities = liabilities);
  }

  calcLiabilityTotal(): number {
    return this.balanceSheetService.getMoneyTotal(this.liabilities);
  }

  ngOnInit() {
    this.liabilities = [];
    this.getLiabilities();
  }

}
