/*
 * Reducer actions related with login
 */
import * as types from './types';
import { IFetchBooks } from './../../models/api/fetchBooks';

export function IFetchBooksRequest() {
  return {
    type: types.FETCH_BOOKLIST_REQUEST,

  };
}

export function IFetchBooksResponse(response: IFetchBooks) {
  return {
    type: types.FETCH_BOOKLIST_RESPONSE,
    response
  };
}

export function IFetchBooksLoading() {
  return {
    type: types.FETCH_LOADING,
  };
}

export function IFetchBooksLoadingStop() {
  return {
    type: types.FETCH_STOPLOADING,
  };
}

export function ISetFavorite(response: string[]) {
  return {
    type: types.SET_FAVORITE,
    response

  };
}


