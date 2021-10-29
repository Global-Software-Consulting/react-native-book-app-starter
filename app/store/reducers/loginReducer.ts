/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'lib/createReducer';
import { ILoginRequestState, ILoginResponseState } from 'models/actions/login';
import * as types from 'store/actions/types';
import { ILoginState } from './../../models/reducers/login';

const initialState: ILoginState = {
    isLoggedIn: false,
    user: { firstName: '', lastName: '', email: '', gender: '', status: ''},
};

export const loginReducer = createReducer(initialState, {
    [types.LOGIN_REQUEST](state: ILoginState, action: ILoginRequestState) {
        return {
            ...state,
            username: action.username,
            password: action.password,
        };
    },
    [types.LOGIN_LOADING_ENDED](state: ILoginState) {
        return { ...state };
    },
    [types.SET_LOGGED_IN](state: ILoginState) {
        return {
            ...state,
            isLoggedIn: true,
        };
    },
    [types.LOG_OUT](state: ILoginState) {
        return {
            ...state,
            isLoggedIn: false,
        };
    },
    [types.USER_DETAILS_RESPONSE](state: ILoginState, action: ILoginResponseState) {
        return {
            ...state,
            user: action.payload,
        };
    },
    [types.SIGN_UP_RESPONSE](state: ILoginState, action: ILoginResponseState) {
        return {
            ...state,
            user: action.payload,
        };
    },
    [types.FORGET_PASSWORD_RESPONSE](state: ILoginState, action: ILoginResponseState) {
        return {
            ...state,
            forgetPasswordResponse: action.payload,
        };
    },
});
