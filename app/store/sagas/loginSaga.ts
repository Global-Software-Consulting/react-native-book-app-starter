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
import getBooks from 'services/getBooks';
import getFavoriteBooks from 'services/getFavoriteBooks';
import getUserDetail from 'services/getUserDetail';
import loginUser from 'services/loginUser';
import * as appActions from 'store/actions/appActions';
import * as loginActions from 'store/actions/loginActions';
import * as snackbarActions from 'store/actions/snackbarActions';
interface ILoginDetail {
    data: [];
}

const storeData = async (value: string) => {
    try {
        await AsyncStorage.setItem('token', value);
    } catch (e) {
        // saving error
    }
};

// Our worker Saga that logins the user
export default function* loginAsync(action: ILoginDetail) {
    try {
        yield put(loginActions.enableLoader());
        //how to call api
        const loginCall: ResponseGenerator = yield call(loginUser, action.params);

        if (loginCall.status === 'networkFailed') {
            yield put(loginActions.disableLoader());
        } else {
            if (loginCall.status !== 'error') {
                storeData(loginCall.token);

                const userDetailCall: ResponseGenerator = yield call(getUserDetail);
                yield put(loginActions.userDetailsResponse(userDetailCall.result));

                const favoriteBookCall: ResponseGenerator = yield call(getFavoriteBooks);
                yield put(appActions.getFavoriteBookResponse(favoriteBookCall.result));

                const fetchBookCall: ResponseGenerator = yield call(getBooks, 'a');
                yield put(appActions.getBookResponse(fetchBookCall.result));

                yield put(loginActions.setLoggedIn());
            } else {
                yield put(loginActions.disableLoader());
                yield put(
                    snackbarActions.enableSnackbar('Login failed, please check your credentials'),
                );
            }
        }
    } catch (error) {
        yield put(loginActions.disableLoader());
        yield put(snackbarActions.enableSnackbar('Login failed, please check your credentials'));
    }

    //create a delay of 2 seconds

    // no need to call navigate as this is handled by redux store with SwitchNavigator
    //yield call(navigationActions.navigateToHome);
}
