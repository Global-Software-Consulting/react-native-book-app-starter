import { IBookState } from 'models/reducers/fetchBooks';
import createReducer from 'lib/createReducer';
import * as types from 'store/actions/types';
import { IBookResponse } from '../../models/actions/fetchBooks';

const initialState: IBookState = {
    snackbarVisible: false,
    snackbarMessage:'',
};

export const snackbarReducer = createReducer(initialState, {
    [types.ENABLE_SNACKBAR](state: IBookState, action: {payload:string}) {
        return {
            ...state,
            snackbarVisible: true,
            snackbarMessage: action.payload
        };
    },
    [types.DISABLE_SNACKBAR](state: IBookState) {
        return {
            ...state,
            snackbarVisible: false,
            snackbarMessage: ''
        };
    },
});
