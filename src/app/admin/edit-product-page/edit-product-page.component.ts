import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Book, ProductService } from '../../product';
import { Store } from '@ngrx/store';
import { ApplicationState, BooksState, GetBook, UpdateBook, CreateBook, DeleteBook } from '../../+store';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-edit-product-page',
  templateUrl: './edit-product-page.component.html',
  styleUrls: ['./edit-product-page.component.css']
})
export class EditProductPageComponent implements OnInit, OnDestroy {

  sub: Subscription;
  booksState$: Store<BooksState>;
  book: Book;

  constructor(
    private store: Store<ApplicationState>,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.booksState$ = this.store.select('books');
    this.route.paramMap.subscribe((params: Params) => this.store.dispatch(new GetBook(+params.get('id'))));
    this.sub = this.booksState$.subscribe(state => {
      this.book = state.currentBook;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  doSave(): void {
    if (this.book.sku) {
      this.store.dispatch(new UpdateBook(this.book));
    } else {
      this.store.dispatch(new CreateBook(this.book));
    }
    this.goBack();
  }

  doDelete(): void {
    this.store.dispatch(new DeleteBook(this.book));
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }

}
