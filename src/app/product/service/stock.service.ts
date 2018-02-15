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

  addStock(sku: number, quantity: number): void {
    const stocks = this.getStocks();
    for (const stock of stocks) {
      if (+stock.sku === sku) {
        stock.stock = stock.stock + quantity;
        this.updateStocks(stocks);
        return;
      }
    }
    const newStock = new ProductStock(sku, quantity);
    stocks.push(newStock);
    this.updateStocks(stocks);
  }

  reduceStock(sku: number, quantity: number): void {
    const stocks = this.getStocks();
    for (const stock of stocks) {
      if (+stock.sku === sku) {
        if (quantity > stock.stock) {
          stock.stock = 0;
        } else {
          stock.stock = stock.stock - quantity;
        }
        this.updateStocks(stocks);
        return;
      }
    }
  }

  increaseStock(sku: number, quantity: number): void {
    const stocks = this.getStocks();
    for (const stock of stocks) {
      if (+stock.sku === sku) {
        stock.stock += quantity;
        this.updateStocks(stocks);
        return;
      }
    }
  }

  getStockForSku(sku: number): Observable<number> {
    for (const stock of this.getStocks()) {
      if (+stock.sku === sku) {
        return of(stock.stock);
      }
    }
    return of(0);
  }

  private getStocks(): ProductStock[] {
    return <ProductStock[]> this.localStorageService.getItem('stock');
  }

  private updateStocks(stock: ProductStock[]) {
    this.localStorageService.setItem('stock', stock);
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
