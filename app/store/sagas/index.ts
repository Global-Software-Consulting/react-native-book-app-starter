/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import loginSaga from './loginSaga';
import userDetails from './userDetails';
import fetchBookSaga from './fetchBookSaga';
export default function* watch() {
  yield all([takeEvery(types.LOGIN_REQUEST, loginSaga),takeEvery(types.FETCH_BOOKLIST_REQUEST, fetchBookSaga), takeEvery(types.USER_DETAILS_REQUEST, userDetails)]);

}
