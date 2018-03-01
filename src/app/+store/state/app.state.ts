import { BooksState } from './books.state';
import { ActionReducerMap } from '@ngrx/store';
import { booksReducer } from '../reducer/books.reducer';

export interface ApplicationState {
    books: BooksState;
}

export const reducers: ActionReducerMap<ApplicationState> = {
    books: booksReducer
};
