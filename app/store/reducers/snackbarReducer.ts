import { ISnackbar } from 'models/reducers/snackbar';
import createReducer from 'lib/createReducer';
import * as types from 'store/actions/types';
import { ISnackbarResponse } from '../../models/actions/snackbar';

const initialState: ISnackbar = {
    snackbarVisible: false,
    snackbarMessage: '',
};

export const snackbarReducer = createReducer(initialState, {
    [types.ENABLE_SNACKBAR](state: ISnackbar, action: ISnackbarResponse) {
        return {
            ...state,
            snackbarVisible: true,
            snackbarMessage: action.payload,
        };
    },
    [types.DISABLE_SNACKBAR](state: ISnackbar) {
        return {
            ...state,
            snackbarVisible: false,
            snackbarMessage: '',
        };
    },
});
