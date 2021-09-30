/*
 * Reducer actions related with login
 */
import { ILoginResponse } from 'models/api/login';
import * as types from './types';


export type UserData = Pick<UserDetails, 'email' | 'password' | 'status'
| 'result'>


export interface UserDetails {
    email: string;
    password?: string;
    gender?: string;
    firstName?: string;
    lastName?: string;
    status?: string,
    result?:string
}



export function requestLogin(params: UserData) {
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

export function userDetailsRequest(token: string) {
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

export function userDetailsResponse(payload: undefined | string): {
    type: string;
    payload: undefined | string;
} {
    return {
        type: types.USER_DETAILS_RESPONSE,
        payload,
    };
}

export function signupRequest(params: UserData) {
    return {
        type: types.SIGN_UP_REQUEST,
        params,
    };
}

export function signupResponse(payload: UserData | undefined | null): {
    type: string;
    payload: UserData | undefined | null;
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

export function forgotPasswordResponse(payload: UserData): {
    type: string;
    payload: UserData;
} {
    return {
        type: types.FORGET_PASSWORD_RESPONSE,
        payload,
    };
}
export function updateProfileRequest(data: UserDetails) {
    return {
        type: types.UPDATE_PROFILE_REQUEST,
        data,
    };
}

export function updateProfileResponse(payload: UserData): {
    type: string;
    payload: UserData;
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
