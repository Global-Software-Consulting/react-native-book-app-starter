/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'lib/createReducer';
import * as types from 'store/actions/types';

import { IThemeState } from 'models/reducers/theme';
import { IThemeToggleAction } from 'models/actions/theme';

const initialState: IThemeState = {
    isDark: false,
};

export const themeReducer = createReducer(initialState, {
    [types.TOGGLE_THEME](state: IThemeState, action: IThemeToggleAction) {
        return { ...state, isDark: action.isDark };
    },
});
