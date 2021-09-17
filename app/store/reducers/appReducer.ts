import { IBookState } from 'app/models/reducers/fetchBooks';
import createReducer from 'lib/createReducer';
import * as types from 'store/actions/types';
import { IBookResponse } from './../../models/actions/fetchBooks';

const initialState: IBookState = {
    isFetching: true,
    detail: [],
    favorite: [],
    bookDetail: {},
};

export const appReducer = createReducer(initialState, {
    [types.FETCH_BOOKLIST_REQUEST](state: IBookState) {
        return {
            ...state,
        };
    },
    [types.FETCH_BOOKLIST_RESPONSE](state: IBookState, action: IBookResponse) {
        return {
            ...state,
            detail: action.payload,
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

    [types.FETCH_FAVORITE_BOOKLIST_REQUEST](state: IBookState) {
        return {
            ...state,
        };
    },
    [types.FETCH_FAVORITE_BOOKLIST_RESPONSE](state: IBookState, action: IBookResponse) {
        return {
            ...state,
            favorite: action.payload,
        };
    },
    [types.FETCH_FAVORITE_BOOKDETAIL_REQUEST](state: IBookState) {
        return {
            ...state,
        };
    },
    [types.FETCH_FAVORITE_BOOKDETAIL_RESPONSE](state: IBookState, action: IBookResponse) {
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
