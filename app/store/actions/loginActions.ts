/*
 * Reducer actions related with login
 */
import { ILoginResponse } from 'models/api/login';
import * as types from './types';

interface IData {
    data: [];
}

export function requestLogin(params: IData) {
    return {
        type: types.LOGIN_REQUEST,
        params,
    };
}

export function setLoggedIn() {
    return {
        type: types.SET_LOGGED_IN,
    };
}

export function loginFailed() {
    return {
        type: types.LOGIN_FAILED,
    };
}

export function LoginResponse(payload: ILoginResponse): {
    type: string;
    payload: ILoginResponse;
} {
    return {
        type: types.LOGIN_RESPONSE,
        payload,
    };
}

export function enableLoader() {
    return {
        type: types.LOGIN_ENABLE_LOADER,
    };
}

export function disableLoader() {
    return {
        type: types.LOGIN_DISABLE_LOADER,
    };
}

export function logOut() {
    return {
        type: types.LOG_OUT,
    };
}

export function userDetailsRequest(token: any) {
    return {
        type: types.USER_DETAILS_REQUEST,
        token,
    };
}

export function setToken(payload: string): {
    type: string;
    payload: string;
} {
    return {
        type: types.SET_TOKEN,
        payload,
    };
}

export function userDetailsResponse(payload: IData | undefined | string): {
    type: string;
    payload: IData | undefined | string;
} {
    return {
        type: types.USER_DETAILS_RESPONSE,
        payload,
    };
}

export function signupRequest(params: IData) {
    return {
        type: types.SIGN_UP_REQUEST,
        params,
    };
}

export function signupResponse(payload: IData | undefined | null): {
    type: string;
    payload: IData | undefined | null;
} {
    return {
        type: types.SIGN_UP_RESPONSE,
        payload,
    };
}
export function forgotPassword(params: string) {
    return {
        type: types.FORGET_PASSWORD_REQUEST,
        params,
    };
}

export function forgotPasswordResponse(payload: IData | string | undefined): {
    type: string;
    payload: IData | string | undefined;
} {
    return {
        type: types.FORGET_PASSWORD_RESPONSE,
        payload,
    };
}
export function updateProfileRequest(data: IData) {
    return {
        type: types.UPDATE_PROFILE_REQUEST,
        data,
    };
}

export function updateProfileResponse(payload: IData): {
    type: string;
    payload: IData;
} {
    return {
        type: types.UPDATE_PROFILE_RESPONSE,
        payload,
    };
}
export function clearLoginResponse() {
    return {
        type: types.CLEAR_LOGIN_RESPONSE,
    };
}
