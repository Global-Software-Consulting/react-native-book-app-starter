/**
 *  Redux saga class init
 */
import { all, takeEvery } from 'redux-saga/effects';
import * as types from '../actions/types';
import bookDetailSaga from './bookDetailSaga';
import favoriteBookSaga from './favoriteBookSaga';
import fetchBookSaga from './fetchBookSaga';
import loginSaga from './loginSaga';
import userDetails from './userDetails';
export default function* watch() {
  yield all([takeEvery(types.LOGIN_REQUEST, loginSaga),
    takeEvery(types.FETCH_BOOKLIST_REQUEST, fetchBookSaga),
     takeEvery(types.USER_DETAILS_REQUEST, userDetails),
    takeEvery(types.FETCH_FAVORITE_BOOKLIST_REQUEST, favoriteBookSaga),
    takeEvery(types.FETCH_FAVORITE_BOOKDETAIL_REQUEST, bookDetailSaga),
    ]);

}
