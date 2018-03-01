import { Action } from '@ngrx/store';
import { Book } from '../../product';

export class BooksActionTypes {
    static readonly GET_BOOKS =           '[Books] GET_BOOKS';
    static readonly GET_BOOKS_SUCCESS =   '[Books] GET_BOOKS_SUCCESS';
    static readonly GET_BOOKS_ERROR =     '[Books] GET_BOOKS_ERROR';
    static readonly GET_BOOK =            '[Books] GET_BOOK';
    static readonly GET_BOOK_SUCCESS =    '[Books] GET_BOOK_SUCCESS';
    static readonly GET_BOOK_ERROR =      '[Books] GET_BOOK_ERROR';
    static readonly CREATE_BOOK =         '[Books] CREATE_BOOK';
    static readonly CREATE_BOOK_SUCCESS = '[Books] CREATE_BOOK_SUCCESS';
    static readonly CREATE_BOOK_ERROR =   '[Books] CREATE_BOOK_ERROR';
    static readonly UPDATE_BOOK =         '[Books] UPDATE_BOOK';
    static readonly UPDATE_BOOK_SUCCESS = '[Books] UPDATE_BOOK_SUCCESS';
    static readonly UPDATE_BOOK_ERROR =   '[Books] UPDATE_BOOK_ERROR';
    static readonly DELETE_BOOK =         '[Books] DELETE_BOOK';
    static readonly DELETE_BOOK_SUCCESS = '[Books] DELETE_BOOK_SUCCESS';
    static readonly DELETE_BOOK_ERROR =   '[Books] DELETE_BOOK_ERROR';
}

export class GetBooks implements Action {
    readonly type = BooksActionTypes.GET_BOOKS;
}

export class GetBooksSuccess implements Action {
    readonly type = BooksActionTypes.GET_BOOKS_SUCCESS;
    constructor(public payload: Book[]) { }
}

export class GetBooksError implements Action {
    readonly type = BooksActionTypes.GET_BOOKS_ERROR;
    constructor(public payload: Error | string) { }
}

export class GetBook implements Action {
    readonly type = BooksActionTypes.GET_BOOK;
    constructor(public payload: number) { }
}

export class GetBookSuccess implements Action {
    readonly type = BooksActionTypes.GET_BOOK_SUCCESS;
    constructor(public payload: Book) { }
}

export class GetBookError implements Action {
    readonly type = BooksActionTypes.GET_BOOK_ERROR;
    constructor(public payload: Error | string) { }
}

export class CreateBook implements Action {
    readonly type = BooksActionTypes.CREATE_BOOK;
    constructor(public payload: Book) { }
}

export class CreateBookSuccess implements Action {
    readonly type = BooksActionTypes.CREATE_BOOK_SUCCESS;
    constructor(public payload: Book) { }
}

export class CreateBookError implements Action {
    readonly type = BooksActionTypes.CREATE_BOOK_ERROR;
    constructor(public payload: Error | string) { }
}

export class UpdateBook implements Action {
    readonly type = BooksActionTypes.UPDATE_BOOK;
    constructor(public payload: Book) { }
}

export class UpdateBookSuccess implements Action {
    readonly type = BooksActionTypes.UPDATE_BOOK_SUCCESS;
    constructor(public payload: Book) { }
}

export class UpdateBookError implements Action {
    readonly type = BooksActionTypes.UPDATE_BOOK_ERROR;
    constructor(public payload: Error | string) { }
}

export class DeleteBook implements Action {
    readonly type = BooksActionTypes.DELETE_BOOK;
    constructor(public payload: Book) { }
}

export class DeleteBookSuccess implements Action {
    readonly type = BooksActionTypes.DELETE_BOOK_SUCCESS;
    constructor(public payload: Book) { }
}

export class DeleteBookError implements Action {
    readonly type = BooksActionTypes.DELETE_BOOK_ERROR;
    constructor(public payload: Error | string) { }
}

export type BooksActions
= GetBooks
| GetBooksSuccess
| GetBooksError
| GetBook
| GetBookSuccess
| GetBookError
| CreateBook
| CreateBookSuccess
| CreateBookError
| UpdateBook
| UpdateBookSuccess
| UpdateBookError
| DeleteBook
| DeleteBookSuccess
| DeleteBookError;
