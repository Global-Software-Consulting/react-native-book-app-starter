import { Response } from './types';
import { call, put } from 'redux-saga/effects';
import * as loadingActions from 'store/actions/loginActions';
import * as snackbarActions from 'store/actions/snackbarActions';
import getBooks from '../../services/getBooks';
import getFavoriteBooks from '../../services/getFavoriteBooks';
import * as appActions from '../actions/appActions';

export default function* fetchBookAsync(action: { keyword: string }) {
    // if (action.keyword = "abort") {

    // }
    // else {
        try {
            yield put(loadingActions.enableLoader());
            //calling api

            const response: Response = yield call(getBooks, action.keyword);
            if (response.status === 'networkFailed') {
                yield put(loadingActions.disableLoader());
            } else {
                if (response && response?.status === 'success') {
                    yield put(appActions.getBookResponse(response.result));
                    const favoriteBooksResponse: Response = yield call(getFavoriteBooks);
                    yield put(appActions.getFavoriteBookResponse(favoriteBooksResponse.result));
                    yield put(loadingActions.disableLoader());
                } else if (response?.status !== 'success') {
                    yield put(loadingActions.disableLoader());
                    yield put(
                        snackbarActions.enableSnackbar('Error loading book list, please try again'),
                    );
                }
            }
        } catch (error) {
            yield put(loadingActions.disableLoader());
            yield put(snackbarActions.enableSnackbar('Error loading book list, please try again'));
        }
        //start loading
    }
// }
