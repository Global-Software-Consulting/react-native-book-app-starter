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


  export function IFetchFavoriteBooksRequest() {
    return {
      type: types.FETCH_FAVORITE_BOOKLIST_REQUEST,
      
    };
  }
  
  export function IFetchFavoriteBooksResponse(payload: IFetchBooks) {
    return {
      type: types.FETCH_FAVORITE_BOOKLIST_RESPONSE,
      payload
    };
  }

  export function IFetchBookDetailRequest(id) {
    return {
      type: types.FETCH_FAVORITE_BOOKDETAIL_REQUEST,
      id,
    };
  }
  
  export function IFetchBookDetailResponse(payload: IFetchBooks):{
    type:string
    payload:IFetchBooks
  } {
    return {
      type: types.FETCH_FAVORITE_BOOKDETAIL_RESPONSE,
      payload
    };
  }
    export function IAddToFavoritesRequest(id) {
      return {
        type: types.ADD_TO_FAVORITE_REQUEST,
        id
      };
    }
    
    export function IRemoveFromFavoritesRequest(id) {
      return {
        type: types.REMOVE_FROM_FAVORITE_REQUEST,
        id
      };
    }

 
   
  

