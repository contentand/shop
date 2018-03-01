import { Action } from '@ngrx/store';
import { Book } from '../../product';

export class BooksActionTypes {
    static readonly GET_BOOKS =   '[Books] GET_BOOKS';
    static readonly GET_BOOK =    '[Books] GET_BOOK';
    static readonly CREATE_BOOK = '[Books] CREATE_BOOK';
    static readonly UPDATE_BOOK = '[Books] UPDATE_BOOK';
    static readonly DELETE_BOOK = '[Books] DELETE_BOOK';
}

export class GetBooks implements Action {
    readonly type = BooksActionTypes.GET_BOOKS;
}

export class GetBook implements Action {
    readonly type = BooksActionTypes.GET_BOOK;
    constructor(public payload: string | number) { }
}

export class CreateBook implements Action {
    readonly type = BooksActionTypes.CREATE_BOOK;
    constructor(public payload: Book) { }
}

export class UpdateBook implements Action {
    readonly type = BooksActionTypes.UPDATE_BOOK;
    constructor(public payload: Book) { }
}

export class DeleteBook implements Action {
    readonly type = BooksActionTypes.DELETE_BOOK;
    constructor(public payload: Book) { }
}

export type BooksActions
= GetBooks
| GetBook
| CreateBook
| UpdateBook
| DeleteBook;
