import { IBookState } from 'models/reducers/fetchBooks';
import createReducer from 'lib/createReducer';
import * as types from 'store/actions/types';
import { IBookResponse } from '../../models/actions/fetchBooks';

const initialState: IBookState = {
    books: [],
    favorite: []
};

export const appReducer = createReducer(initialState, {
    [types.GET_BOOK_REQUEST](state: IBookState) {
        return {
            ...state,
        };
    },
    [types.GET_BOOK_RESPONSE](state: IBookState, action: IBookResponse) {
        return {
            ...state,
            books: action.payload,
        };
    },
    [types.GET_FAVORITE_BOOK_LIST_REQUEST](state: IBookState) {
        return {
            ...state,
        };
    },
    [types.GET_FAVORITE_BOOK_LIST_RESPONSE](state: IBookState, action: IBookResponse) {
        return {
            ...state,
            favorite: action.payload,
        };
    },
});
