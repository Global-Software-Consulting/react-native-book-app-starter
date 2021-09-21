import { IBookState } from 'app/models/reducers/fetchBooks';
import createReducer from 'lib/createReducer';
import * as types from 'store/actions/types';
import { IBookResponse } from './../../models/actions/fetchBooks';

const initialState: IBookState = {
    isFetching: true,
    books: [], // books
    favorite: [], //favorite
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
    [types.FETCH_LOADING](state: IBookState) {
        return {
            ...state,
            isFetching: true,
        };
    },
    [types.FETCH_STOPLOADING](state: IBookState) {
        return {
            ...state,
            isFetching: false,
        };
    },

    [types.GET_FAVORITE_BOOKLIST_REQUEST](state: IBookState) {
        return {
            ...state,
        };
    },
    [types.GET_FAVORITE_BOOKLIST_RESPONSE](state: IBookState, action: IBookResponse) {
        return {
            ...state,
            favorite: action.payload,
        };
    },
    [types.GET_BOOKDETAIL_REQUEST](state: IBookState) {
        return {
            ...state,
        };
    },
    [types.GET_BOOKDETAIL_RESPONSE](state: IBookState, action: IBookResponse) {
        return {
            ...state,
            bookDetail: action.payload,
        };
    },

    [types.ADD_TO_FAVORITE_REQUEST](state: IBookState) {
        return {
            ...state,
        };
    },

    [types.REMOVE_FROM_FAVORITE_REQUEST](state: IBookState) {
        return {
            ...state,
        };
    },
});
