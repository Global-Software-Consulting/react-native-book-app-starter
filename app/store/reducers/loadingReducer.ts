/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'lib/createReducer';
import { ILoading } from 'models/reducers/loading';
import * as types from 'store/actions/types';

const initialState: ILoading = {
    isLoginLoading: false,
};

export const loadingReducer = createReducer(initialState, {
    [types.LOGIN_ENABLE_LOADER](state: ILoading) {
        return { ...state, isLoginLoading: true };
    },
    [types.LOGIN_DISABLE_LOADER](state: ILoading) {
        return { ...state, isLoginLoading: false };
    },
});
