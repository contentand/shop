import { Book } from '../../product/model';

export interface BooksState {
    data: ReadonlyArray<Book>;
    readonly currentBook: Book;
    readonly loading: boolean;
    readonly loaded: boolean;
    readonly error: Error | string;
}


export const initialBookState: BooksState = {
    data: [],
    currentBook: new Book(null, '', '', '', '', 0),
    loading: false,
    loaded: false,
    error: null
};
