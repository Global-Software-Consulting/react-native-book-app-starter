import { Response } from './types';
import { call, put } from 'redux-saga/effects';
import * as loadingActions from 'store/actions/loginActions';
import * as snackbarActions from 'store/actions/snackbarActions';
import getUserDetail from '../../services/getUserDetail';
import * as authActions from '../actions/loginActions';

export default function* fetchBookAsync() {
    try {
        const response: Response = yield call(getUserDetail);
        if (response) {
            if (response?.status === 'success') {
                yield put(authActions.userDetailsResponse(response.result));
            } else if (response?.status === 'networkFailed') {
                yield put(loadingActions.disableLoader());
            } else {
                yield put(loadingActions.disableLoader());
                yield put(
                    snackbarActions.enableSnackbar('Error getting user detail, please try again.'),
                );
            }
        }
    } catch (error) {
        yield put(loadingActions.disableLoader());
        yield put(snackbarActions.enableSnackbar('Error getting user detail, please try again.'));
    }
}
