import { Response } from './types';
import { call, put } from 'redux-saga/effects';
import updateProfile from 'services/updateProfile';
import * as loginActions from 'store/actions/loginActions';
import * as snackbarActions from 'store/actions/snackbarActions';
import { UpdateProfile } from 'services/types';
import { UserData } from 'store/actions/loginActions';
export default function* updateUserDetails(action: UpdateProfile ) {
    try {
        yield put(loginActions.enableLoader());
        //calling api
        const response: UserData = yield call(updateProfile, action);
        //mock response
        if (response) {
            if (response.status === 'networkFailed') {
                yield put(loginActions.disableLoader());
            } else {
                yield put(loginActions.updateProfileResponse(response));
                if (response?.status === 'success') {
                    yield put(loginActions.userDetailsResponse(response.result));
                } else {
                    yield put(
                        snackbarActions.enableSnackbar('Error updating profile, please try again'),
                    );
                }
                yield put(loginActions.disableLoader());
            }
        }
    } catch (error) {
        yield put(loginActions.disableLoader());
        yield put(snackbarActions.enableSnackbar('Error updating profile, please try again'));
    }
}
