/*
 * Reducer actions related with login
 */
import * as types from './types';
import { ILoginResponse } from 'models/api/login';

export function requestLogin(params: object) {
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

export function userDetailsResponse(payload: object | undefined | string): {
    type: string;
    payload: object | undefined | string;
} {
    return {
        type: types.USER_DETAILS_RESPONSE,
        payload,
    };
}

export function ISignupRequest(params: object) {
    return {
        type: types.SIGN_UP_REQUEST,
        params,
    };
}

export function ISignupResponse(payload: object | undefined | null): {
    type: string;
    payload: object | undefined | null;
} {
    return {
        type: types.SIGN_UP_RESPONSE,
        payload,
    };
}
export function IForgotPasswordRequest(params: string) {
    return {
        type: types.FORGET_PASSWORD_REQUEST,
        params,
    };
}

export function IForgotPasswordResponse(payload: object | string | undefined): {
    type: string;
    payload: object | string | undefined;
} {
    return {
        type: types.FORGET_PASSWORD_RESPONSE,
        payload,
    };
}
export function IUpdateProfileRequest(data: object) {
    return {
        type: types.UPDATE_PROFILE_REQUEST,
        data,
    };
}

export function IUpdateProfileResponse(payload: object): {
    type: string;
    payload: object;
} {
    return {
        type: types.UPDATE_PROFILE_RESPONSE,
        payload,
    };
}
export function IClearLoginResponse() {
    return {
        type: types.CLEAR_LOGIN_RESPONSE,
    };
}
