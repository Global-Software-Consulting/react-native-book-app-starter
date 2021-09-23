/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { ResponseGenerator } from 'models/Saga/ResponseGenerator';
import { call, put } from 'redux-saga/effects';
import updateProfile from 'services/updateProfile';
import * as loginActions from 'store/actions/loginActions';
import * as snackbarActions from 'store/actions/snackbarActions';
interface IData {
    data: [];
}

// Our worker Saga that logins the user
export default function* updateUserDetails(action: { data: IData }) {
    try {
    yield put(loginActions.enableLoader());
    //how to call api
        const response: ResponseGenerator = yield call(updateProfile, action.data);
        console.log('responswa',response)
    //mock response
        if (response) {
            if (response.status === 'networkFailed') {
                yield put(loginActions.disableLoader());
            }
            else {
                yield put(loginActions.updateProfileResponse(response));
                if (response?.status === 'success') {
                    yield put(loginActions.userDetailsResponse(response.result));
                }
                else {
                    yield put(snackbarActions.enableSnackbar('Error updating profile, please try again'))
                }
                yield put(loginActions.disableLoader());
            }
    }
}
    catch (error) {
        yield put(loginActions.disableLoader());
        yield put(snackbarActions.enableSnackbar('Error updating profile, please try again'))
    }

}
