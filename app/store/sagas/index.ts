/**
 *  Redux saga class init
 */
import { all, takeEvery } from 'redux-saga/effects';
import forgetPasswordSaga from 'store/sagas/forgetPasswordSaga';
import removeBookFromFavoritesSaga from 'store/sagas/removeBookFromFavoritesSaga';
import signupSaga from 'store/sagas/signupSaga';
import updateProfileDetails from 'store/sagas/updateProfileDetails';
import * as types from '../actions/types';
import addBooktoFavorite from './addBookToFavoritesSaga';
import bookDetailSaga from './bookDetailSaga';
import favoriteBookSaga from './favoriteBookSaga';
import fetchBookSaga from './fetchBookSaga';
import loginSaga from './loginSaga';
import userDetails from './userDetails';
export default function* watch() {
    yield all([
        takeEvery(types.LOGIN_REQUEST, loginSaga),
        takeEvery(types.GET_BOOK_REQUEST, fetchBookSaga),
        takeEvery(types.USER_DETAILS_REQUEST, userDetails),
        takeEvery(types.GET_FAVORITE_BOOK_LIST_REQUEST, favoriteBookSaga),
        takeEvery(types.GET_BOOKDETAIL_REQUEST, bookDetailSaga),
        takeEvery(types.ADD_TO_FAVORITE_REQUEST, addBooktoFavorite),
        takeEvery(types.REMOVE_FROM_FAVORITE_REQUEST, removeBookFromFavoritesSaga),
        takeEvery(types.SIGN_UP_REQUEST, signupSaga),
        takeEvery(types.FORGET_PASSWORD_REQUEST, forgetPasswordSaga),
        takeEvery(types.UPDATE_PROFILE_REQUEST, updateProfileDetails),
    ]);
}
