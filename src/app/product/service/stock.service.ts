import { Injectable } from '@angular/core';

import { LocalStorageService } from '../../core';
import { ProductStock } from '../model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class StockService {

  constructor(private localStorageService: LocalStorageService) {
    this.initializeData();
  }

  getStockForSku(sku: number): Observable<number> {
    for (const stock of <ProductStock[]> this.localStorageService.getItem('stock')) {
      if (+stock.sku === sku) {
        return of(stock.stock);
      }
    }
    return of(0);
  }

  private initializeData(): void {
    if (!this.localStorageService.getItem('stock')) {
      this.localStorageService.setItem('stock', [
        new ProductStock(1, 0),
        new ProductStock(2, 10),
        new ProductStock(3, 20),
        new ProductStock(4, 150),
      ]);
    }
  }

}
