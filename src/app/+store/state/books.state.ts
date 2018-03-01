import { Book } from '../../product';

export interface BooksState {
    data: ReadonlyArray<Book>;
    readonly currentBook: Book;
    readonly loading: boolean;
    readonly loaded: boolean;
    readonly error: Error | string;
}


export const initialBookState: BooksState = {
    data: [],
    currentBook: null,
    loading: false,
    loaded: false,
    error: null
};
