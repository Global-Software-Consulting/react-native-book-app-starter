/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
// import { delay } from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ResponseGenerator } from 'models/Saga/ResponseGenerator';
import { call, put } from 'redux-saga/effects';
import fetchBooks from 'services/fetchBooks';
import fetchFavoriteBooks from 'services/fetchFavoriteBooks';
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
    const response: ResponseGenerator = yield call(signupUser, action.params);
    if (response && response.status === 'success') {
        yield call(storeData, response.token);

        yield put(loginActions.userDetailsResponse(response.result));

        const favoriteBookCall: ResponseGenerator = yield call(fetchFavoriteBooks);
        yield put(appActions.getFavoriteBookResponse(favoriteBookCall.result));

        const fetchBookCall: ResponseGenerator = yield call(fetchBooks, 'a');
        yield put(appActions.getBookResponse(fetchBookCall.result));
        //if successful then set user as logged in
        yield put(loginActions.setLoggedIn());
        yield put(snackbarActions.storeMessageInSnackbar('Signup successful'))

        yield put(loginActions.disableLoader());

        // no need to call navigate as this is handled by redux store with SwitchNavigator
        //yield call(navigationActions.navigateToHome);
    } else if (response.status === 'error' ) {
        yield put(loginActions.disableLoader());
        yield put(snackbarActions.enableSnackbar('Email already exists'))
    }
}
catch(error) {
    yield put(loginActions.disableLoader());
    yield put(snackbarActions.enableSnackbar('Error registering user, please check the credentials'))
}
}
