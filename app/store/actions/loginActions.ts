/*
 * Reducer actions related with login
 */
import * as types from './types';
import { ILoginResponse } from 'models/api/login';

export function requestLogin(email: string, password: string) {
  return {
    type: types.LOGIN_REQUEST,
    email,
    password,
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