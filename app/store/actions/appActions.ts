/*
 * Reducer actions related with login
 */
import * as types from './types';

export interface IBookResponse {
  isFetching:boolean;
  detail: [];
};

export function fetchBooks() {
  return {
    type: types.FETCH_BOOKLIST,
  };
}

export function onFetchResponse(response: IBookResponse) {
  return {
    type: types.LOGIN_RESPONSE,
    response,
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
