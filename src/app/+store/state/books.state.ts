import { Book } from '../../product';

export interface BooksState {
    data: ReadonlyArray<Book>;
}


export const initialBookState: BooksState = {
    data: [

    ]
};
