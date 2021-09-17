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
import addBooktoFavorite from './addBookToFavoritesSaga';
import removeBookFromFavoritesSaga from 'store/sagas/removeBookFromFavoritesSaga';
import signupSaga from 'store/sagas/signupSaga';
import forgetPasswordSaga from 'store/sagas/forgetPasswordSaga';
import updateProfileDetails from 'store/sagas/updateProfileDetails';

export default function* watch() {
    yield all([
        takeEvery(types.LOGIN_REQUEST, loginSaga),
        takeEvery(types.FETCH_BOOKLIST_REQUEST, fetchBookSaga),
        takeEvery(types.USER_DETAILS_REQUEST, userDetails),
        takeEvery(types.FETCH_FAVORITE_BOOKLIST_REQUEST, favoriteBookSaga),
        takeEvery(types.FETCH_FAVORITE_BOOKDETAIL_REQUEST, bookDetailSaga),
        takeEvery(types.ADD_TO_FAVORITE_REQUEST, addBooktoFavorite),
        takeEvery(types.REMOVE_FROM_FAVORITE_REQUEST, removeBookFromFavoritesSaga),
        takeEvery(types.SIGN_UP_REQUEST, signupSaga),
        takeEvery(types.FORGET_PASSWORD_REQUEST, forgetPasswordSaga),
        takeEvery(types.UPDATE_PROFILE_REQUEST, updateProfileDetails),
    ]);
}
