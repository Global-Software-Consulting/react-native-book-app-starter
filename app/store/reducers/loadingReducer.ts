/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'lib/createReducer';
import { ILoading } from 'models/reducers/loading';
import * as types from 'store/actions/types';

const initialState: ILoading = {
    isLoading: false,
};

export const loadingReducer = createReducer(initialState, {
    [types.LOGIN_ENABLE_LOADER](state: ILoading) {
        return { ...state, isLoading: true };
    },
    [types.LOGIN_DISABLE_LOADER](state: ILoading) {
        return { ...state, isLoading: false };
    },
});
