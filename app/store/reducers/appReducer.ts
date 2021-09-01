import createReducer from 'lib/createReducer';
import * as types from 'store/actions/types';
import { IBookState } from 'app/models/reducers/fetchBooks';

import {IBookResponse} from 'app/store/actions/appActions'
const initialState: IBookState = {
isFetching: false,
detail: []
};

export const bookFetchReducer = createReducer(initialState, {
    [types.FETCH_BOOKLIST](state: IBookState, action: IBookResponse) {
      return {
        ...state,
        isFetching: action.isFetching,
        detail: action.detail
      };
    }
});

