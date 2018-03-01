import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ApplicationState, GetBooks, BooksState } from '../../../+store';
import { ProductService } from '../../../product';
import { CartService } from '../../service';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  booksState$: Store<BooksState>;

  constructor(
    private store: Store<ApplicationState>,
    public cartService: CartService
  ) { }

  ngOnInit() {
    this.booksState$ = this.store.select('books');
    this.store.dispatch(new GetBooks());
  }

}
