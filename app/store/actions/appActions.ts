/*
 * Reducer actions related with login
 */
import * as types from './types';
import { IFetchBooks } from './../../models/api/fetchBooks';

export function IFetchBooksRequest(keyword:string) {
  return {
    type: types.FETCH_BOOKLIST_REQUEST,
    keyword
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


  export function IFetchFavoriteBooksRequest(token:string) {
    return {
      type: types.FETCH_FAVORITE_BOOKLIST_REQUEST,
      token
    };
  }
  
  export function IFetchFavoriteBooksResponse(payload: IFetchBooks) {
    return {
      type: types.FETCH_FAVORITE_BOOKLIST_RESPONSE,
      payload
    };
  }

  export function IFetchBookDetailRequest(params:any) {
    return {
      type: types.FETCH_FAVORITE_BOOKDETAIL_REQUEST,
      params
    };
  }
  
  export function IFetchBookDetailResponse(response: IFetchBooks) {
    return {
      type: types.FETCH_FAVORITE_BOOKDETAIL_RESPONSE,
      response
    };
  }

