import { IBookState } from 'models/reducers/fetchBooks';
import createReducer from 'lib/createReducer';
import * as types from 'store/actions/types';
import { IBookResponse } from '../../models/actions/fetchBooks';

const initialState: IBookState = {
    snackbarVisible: false,
    snackbarMessage:'',
};

export const snackbarReducer = createReducer(initialState, {
    [types.SHOW_SNACKBAR](state: IBookState) {
        return {
            ...state,
            snackbarVisible: true,
        };
    },
    [types.HIDE_SNACKBAR](state: IBookState) {
        return {
            ...state,
            snackbarVisible: false,
        };
    },
    [types.STORE_MESSAGE_IN_SNACKBAR](state: IBookState, action: IBookResponse) {
        return {
            ...state,
            snackbarMessage: action.payload,
        };
    },
    [types.CLEAR_MESSAGE_FROM_SNACKBAR](state: IBookState) {
        return {
            ...state,
            snackbarMessage: ''
        };
    },

});
