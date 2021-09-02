import createReducer from 'lib/createReducer';
import * as types from 'store/actions/types';
import { IBookState } from 'app/models/reducers/fetchBooks';
import { IBookResponse,IBookRequest,IFetchBooksLoading,IFetchBooksLoadingStop } from './../../models/actions/fetchBooks'


const initialState: IBookState = {
isFetching: true,
detail: []
};

export const bookFetchReducer = createReducer(initialState, {
    [types.FETCH_BOOKLIST_REQUEST](state: IBookState, action: IBookRequest) {
      return {
        ...state,
      };
    },
    [types.FETCH_BOOKLIST_RESPONSE](state: IBookState, action: IBookResponse) {
      return {
        ...state,
        detail : action.response,
       
      };
    },
    [types.FETCH_LOADING](state: IBookState, action: IFetchBooksLoading) {
      return {
        ...state,
        isFetching: true,
      };
    },
    [types.FETCH_STOPLOADING](state: IBookState, action: IFetchBooksLoadingStop) {
      return {
        ...state,
        isFetching: false,
      };
    },
});

