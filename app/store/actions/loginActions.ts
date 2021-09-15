/*
 * Reducer actions related with login
 */
import * as types from './types';
import { ILoginResponse } from 'models/api/login';

export function requestLogin(params:object) {
  return {
    type: types.LOGIN_REQUEST,
    params
  };
}

export function setLoggedIn()
{
  return {
    type: types.SET_LOGGED_IN,
  };  
}

export function loginFailed() {
  return {
    type: types.LOGIN_FAILED,
  };
}

export function LoginResponse(payload: ILoginResponse) {
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
  }
}

export function setToken(payload: any) {
  return {
    type: types.SET_TOKEN,
    payload,
  }
}

export function userDetailsResponse(payload: ILoginResponse) {
  return {
    type: types.USER_DETAILS_RESPONSE,
   payload
  }
}

export function ISignupRequest(params:object) {
  return {
    type: types.SIGN_UP_REQUEST,
    params
  };
}

export function ISignupResponse(payload: ILoginResponse) {
  return {
    type: types.SIGN_UP_RESPONSE,
    payload
  };
}
export function IForgotPasswordRequest(params:string) {
  return {
    type: types.FORGET_PASSWORD_REQUEST,
    params
  };
}

export function IForgotPasswordResponse(payload: ILoginResponse) {
  return {
    type: types.FORGET_PASSWORD_RESPONSE,
    payload
  };
}
export function IUpdateProfileRequest(data:object) {
  return {
    type: types.UPDATE_PROFILE_REQUEST,
    data,
  };
}

export function IUpdateProfileResponse(payload) {
  return {
    type: types.UPDATE_PROFILE_RESPONSE,
    payload
  };
}