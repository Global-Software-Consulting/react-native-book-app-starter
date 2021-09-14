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

export function IFetchBooksResponse(payload: IFetchBooks) {
  return {
    type: types.FETCH_BOOKLIST_RESPONSE,
    payload
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

  export function IFetchBookDetailRequest(id:number) {
    return {
      type: types.FETCH_FAVORITE_BOOKDETAIL_REQUEST,
      id,
    };
  }
  
  export function IFetchBookDetailResponse(payload: IFetchBooks) {
    return {
      type: types.FETCH_FAVORITE_BOOKDETAIL_RESPONSE,
      payload
    };
  }
    export function IAddToFavoritesRequest(params:number) {
      return {
        type: types.ADD_TO_FAVORITE_REQUEST,
        params
      };
    }
    
    export function IRemoveFromFavoritesRequest(token:string,id:number) {
      return {
        type: types.REMOVE_FROM_FAVORITE_REQUEST,
        id,
      token
      };
    }
   
  

