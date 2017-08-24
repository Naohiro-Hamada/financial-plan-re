import { Injectable } from '@angular/core';
import { BalanceSheetItem } from './balance-sheet-item';
import { ASSETS } from './mock-assets';
import { LIABILITIES } from './mock-liabilities';

@Injectable()
export class BalanceSheetService {
  constructor() { }

  getAssets(): Promise<BalanceSheetItem[]> {
    return Promise.resolve(ASSETS);
  }

  getLiabilities(): Promise<BalanceSheetItem[]> {
    return Promise.resolve(LIABILITIES);
  }

  getMoneyTotal(items: BalanceSheetItem[]): number {
    let sum = 0;
    items.forEach((item: BalanceSheetItem) => {
      // sum += assets.money.valueOf();
      sum += isNaN(item.money) ? 0 : Number(item.money);
    });

    return sum;
  }

}
