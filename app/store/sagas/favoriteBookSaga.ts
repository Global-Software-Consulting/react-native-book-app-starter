import { Response } from './types';
import { call, put } from 'redux-saga/effects';
import * as loadingActions from 'store/actions/loginActions';
import * as snackbarActions from 'store/actions/snackbarActions';
import getFavoriteBooks from '../../services/getFavoriteBooks';
import * as appActions from '../actions/appActions';

export default function* fetchFavoriteBookAsync() {
    try {
        //start loading
        yield put(loadingActions.enableLoader());
        //calling api
        const response: Response = yield call(getFavoriteBooks);

        if (response && response?.status === 'Success') {
            yield put(appActions.getFavoriteBookResponse(response.result));
            //ends loading
            yield put(loadingActions.disableLoader());
        } else if (response?.status === 'networkFailed') {
            yield put(loadingActions.disableLoader());
        } else {
            yield put(loadingActions.disableLoader());
            yield put(
                snackbarActions.enableSnackbar('Error getting favorite books, please try again'),
            );
        }
    } catch (error) {
        yield put(loadingActions.disableLoader());
        yield put(snackbarActions.enableSnackbar('Error getting favorite books, please try again'));
    }
}
