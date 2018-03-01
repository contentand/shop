import { BooksState, initialBookState } from '../state/books.state';
import { BooksActions, BooksActionTypes } from '..';

export function booksReducer(
    state = initialBookState,
    action: BooksActions
):  BooksState {

    switch (action.type) {

        case BooksActionTypes.GET_BOOKS: {
            break;
        }

        case BooksActionTypes.GET_BOOK: {
            break;
        }

        case BooksActionTypes.CREATE_BOOK: {
            break;
        }

        case BooksActionTypes.UPDATE_BOOK: {
            break;
        }

        case BooksActionTypes.DELETE_BOOK: {
            break;
        }

        default: {
            return state;
        }
    }

    return {... state};
}
