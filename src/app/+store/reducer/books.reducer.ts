import { BooksState, initialBookState } from '../state/books.state';
import { BooksActions, BooksActionTypes } from '..';
import { Book } from '../../product';

export function booksReducer(
    state = initialBookState,
    action: BooksActions
):  BooksState {

    switch (action.type) {

        case BooksActionTypes.GET_BOOKS: {
            return {
                ... state,
                loading: true
            };
        }

        case BooksActionTypes.GET_BOOKS_ERROR: {
            const error = action.payload;
            return {
                ... state,
                loading: false,
                loaded: false,
                error
            };
        }

        case BooksActionTypes.GET_BOOKS_SUCCESS: {
            const data = [...<Array<Book>>action.payload];
            return {
                ... state,
                data,
                loading: false,
                loaded: true
            };
        }

        case BooksActionTypes.GET_BOOK: {
            return {
                ... state,
                currentBook: null,
                loading: true
            };
        }

        case BooksActionTypes.GET_BOOK_ERROR: {
            const error = action.payload;
            return {
                ... state,
                loading: false,
                loaded: false,
                error
            };
        }

        case BooksActionTypes.GET_BOOK_SUCCESS: {
            const currentBook = {...<Book>action.payload};
            return {
                ... state,
                currentBook,
                loading: false,
                loaded: true
            };
        }

        case BooksActionTypes.CREATE_BOOK: {
            break;
        }

        case BooksActionTypes.CREATE_BOOK_SUCCESS: {
            const book = {...<Book>action.payload};
            const data = [...state.data];
            data.push(book);
            return {
                ...state,
                data
            };
        }

        case BooksActionTypes.CREATE_BOOK_ERROR: {
            const error = action.payload;
            return {
              ...state,
              error
            };
        }

        case BooksActionTypes.UPDATE_BOOK: {
            break;
        }

        case BooksActionTypes.UPDATE_BOOK_SUCCESS: {
            const book = {...<Book>action.payload};
            const data = [...state.data];
            const index = data.findIndex(b => b.sku === book.sku);
            data[index] = book;
            return {
                ...state,
                data
            };
        }

        case BooksActionTypes.UPDATE_BOOK_ERROR: {
            const error = action.payload;
            return {
              ...state,
              error
            };
        }

        case BooksActionTypes.DELETE_BOOK: {
            break;
        }

        case BooksActionTypes.DELETE_BOOK_SUCCESS: {
            const book = {...<Book>action.payload};
            const data = [...state.data];
            const index = data.findIndex(b => b.sku === book.sku);
            data.splice(index, 1);
            return {
                ...state,
                data
            };
        }

        case BooksActionTypes.DELETE_BOOK_ERROR: {
            const error = action.payload;
            return {
              ...state,
              error
            };
        }

        default: {
            return state;
        }
    }

    return {... state};
}
