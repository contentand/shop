import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StockService } from '../../product';
import { Store } from '@ngrx/store';
import { ApplicationState, BooksState, GetBooks } from '../../+store';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  booksState$: Store<BooksState>;

  constructor(
    private router: Router,
    private store: Store<ApplicationState>,
    public stockService: StockService
  ) { }

  ngOnInit() {
    this.booksState$ = this.store.select('books');
    this.store.dispatch(new GetBooks());
  }

  edit(sku: number) {
    const link = ['/admin/product/edit', sku];
    this.router.navigate(link);
  }

  doAddNew() {
    const link = ['/admin/product/new'];
    this.router.navigate(link);
  }

}
