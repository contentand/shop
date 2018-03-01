import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { GetBooks, BooksActionTypes, GetBooksSuccess, GetBooksError, GetBook,
    GetBookSuccess, GetBookError, CreateBook, CreateBookSuccess, CreateBookError,
    UpdateBook, UpdateBookSuccess, UpdateBookError, DeleteBook, DeleteBookSuccess,
    DeleteBookError } from '../action/books.actions';

import { ProductService } from '../../product/service';


@Injectable()
export class BookEffects {

    @Effect() getBooks$: Observable<Action> = this.actions$
        .ofType<GetBooks>(BooksActionTypes.GET_BOOKS)
        .pipe(
            switchMap(action => this.bookService.getBooks()
                .pipe(
                    map(books => new GetBooksSuccess(books)),
                    catchError(error => of(new GetBooksError(error)))
                )
            )
        );

    @Effect() getBook$: Observable<Action> = this.actions$
        .ofType<GetBook>(BooksActionTypes.GET_BOOK)
        .pipe(
            map((action: GetBook) => action.payload),
            switchMap(payload => this.bookService.getBook(payload)
                .pipe(
                    map(book => new GetBookSuccess(book)),
                    catchError(error => of(new GetBookError(error)))
                )
            )
        );

    @Effect() createBook$: Observable<Action> = this.actions$
        .ofType<CreateBook>(BooksActionTypes.CREATE_BOOK)
        .pipe(
            map((action: CreateBook) => action.payload),
            switchMap(payload => this.bookService.saveBook(payload)
                .pipe(
                    map(success => new CreateBookSuccess(payload)),
                    catchError(error => of(new CreateBookError(error)))
                )
            )
        );

    @Effect() updateBook$: Observable<Action> = this.actions$
        .ofType<UpdateBook>(BooksActionTypes.UPDATE_BOOK)
        .pipe(
            map((action: UpdateBook) => action.payload),
            switchMap(payload => this.bookService.saveBook(payload)
                .pipe(
                    map(success => new UpdateBookSuccess(payload)),
                    catchError(error => of(new UpdateBookError(error)))
                )
            )
        );

    @Effect() deleteBook$: Observable<Action> = this.actions$
        .ofType<DeleteBook>(BooksActionTypes.DELETE_BOOK)
        .pipe(
            map((action: DeleteBook) => action.payload),
            switchMap(payload => this.bookService.removeBook(payload.sku)
                .pipe(
                    map(success => new DeleteBookSuccess(payload)),
                    catchError(error => of(new DeleteBookError(error)))
                )
            )
        );

    constructor(
        private actions$: Actions,
        private bookService: ProductService
    ) {}

}
