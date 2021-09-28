/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
// import { delay } from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Response } from './types';
import { call, put } from 'redux-saga/effects';
import getBooks from 'services/getBooks';
import getFavoriteBooks from 'services/getFavoriteBooks';
import signupUser from 'services/signupUser';
import * as appActions from 'store/actions/appActions';
import * as loginActions from 'store/actions/loginActions';
import * as snackbarActions from 'store/actions/snackbarActions';
const storeData = async (value: string) => {
    try {
        await AsyncStorage.setItem('token', value);
    } catch (e) {
        // saving error
    }
};

// Our worker Saga that logins the user
export default function* signUpsync(action: any) {
    try {
        yield put(loginActions.enableLoader());
        const response: Response = yield call(signupUser, action.params);
        if (response && response.status === 'success') {
            yield call(storeData, response.token);

            yield put(loginActions.userDetailsResponse(response.result));

            const favoriteBookCall: Response = yield call(getFavoriteBooks);
            yield put(appActions.getFavoriteBookResponse(favoriteBookCall.result));

            const fetchBookCall: Response = yield call(getBooks, 'a');
            yield put(appActions.getBookResponse(fetchBookCall.result));
            //if successful then set user as logged in
            yield put(loginActions.setLoggedIn());
            yield put(snackbarActions.enableSnackbar('Signup successful'));

            yield put(loginActions.disableLoader());

            // no need to call navigate as this is handled by redux store with SwitchNavigator
            //yield call(navigationActions.navigateToHome);
        } else if (response.status === 'error') {
            yield put(loginActions.disableLoader());
            yield put(snackbarActions.enableSnackbar('Email already exists'));
        } else if (response?.status === 'networkFailed') {
            yield put(loginActions.disableLoader());
        }
    } catch (error) {
        yield put(loginActions.disableLoader());
        yield put(
            snackbarActions.enableSnackbar('Error registering user, please check the credentials'),
        );
    }
}
