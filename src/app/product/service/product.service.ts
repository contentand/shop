import { Injectable } from '@angular/core';

import { LocalStorageService } from '../../core';
import { Book } from '../model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { StockService } from './stock.service';

@Injectable()
export class ProductService {

  constructor(
    private localStorageService: LocalStorageService,
    private stockService: StockService
  ) {
    this.initializeData();
  }

  getBooks(): Observable<Book[]> {
    const books = <Book[]>this.localStorageService.getItem('books');
    books.forEach(book => this.stockService.getStockForSku(book.sku).subscribe(stock => book.stock = stock));
    return of(books);
  }

  private initializeData(): void {
    if (!this.localStorageService.getItem('books')) {
      this.localStorageService.setItem('books', [
        new Book(1, 'The Adolescent', ['Fyodor Dostoyevsky'], 'A book about young man.', ['classics', 'novel']),
        new Book(2, 'The Idiot', ['Fyodor Dostoyevsky'],
          'A book on a unique individual at the centre of the conflicts, desires, passions and egoism of worldly society.',
          ['classics', 'novel', 'gambling']),
        new Book(3, 'The Brothers Karamazov', ['Fyodor Dostoyevsky'],
          'A book on ethical debates of God, free will, and morality.', ['classics', 'novel', 'philosophy']),
        new Book(4, 'Crime and Punishment', ['Fyodor Dostoyevsky'], 'A book about the mental anguish and moral dilemmas.', 
          ['classics', 'novel']),
      ]);
    }
  }
}
