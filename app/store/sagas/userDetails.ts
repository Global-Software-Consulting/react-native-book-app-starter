import { call, put } from 'redux-saga/effects';
import fetchUserDetails from '../../services/fetchUserDetails';
import * as authActions from '../actions/loginActions';
import { ResponseGenerator } from 'models/Saga/ResponseGenerator';
import * as loadingActions from 'store/actions/loginActions';
import * as snackbarActions from 'store/actions/snackbarActions';

export default function* fetchBookAsync() {
    try {
        const response: ResponseGenerator = yield call(fetchUserDetails);
        if (response) {
            if(response?.status === 'success') {
                yield put(authActions.userDetailsResponse(response.result));
            }
            else if (response?.status === 'networkFailed') {
                yield put(loadingActions.disableLoader());
            }
                else {
                    yield put(loadingActions.disableLoader());
                    yield put(snackbarActions.enableSnackbar('Error getting user detail, please try again.'))

                }
            }
        }
    catch (error) {
        yield put(loadingActions.disableLoader());
        yield put(snackbarActions.enableSnackbar('Error getting user detail, please try again.'))
}
}
