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
import fetchUserDetails from 'services/fetchUserDetails';
import loginUser from 'services/loginUser';
import * as appActions from 'store/actions/appActions';
import * as loginActions from 'store/actions/loginActions';

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
    yield put(loginActions.enableLoader());
    //how to call api
    const loginCall: ResponseGenerator = yield call(loginUser, action.params);
    //mock response
    if (loginCall.status !== 'error') {
        yield put(loginActions.disableLoader());

        yield call(storeData, loginCall.token);
        yield put(loginActions.LoginResponse(loginCall.token));

        const userDetailCall: ResponseGenerator = yield call(fetchUserDetails);
        yield put(loginActions.userDetailsResponse(userDetailCall.result));

        const favoriteBookCall: ResponseGenerator = yield call(fetchFavoriteBooks);
        yield put(appActions.IFetchFavoriteBooksResponse(favoriteBookCall.result));

        const fetchBookCall: ResponseGenerator = yield call(fetchBooks, 'a');
        yield put(appActions.IFetchBooksResponse(fetchBookCall.result));

        yield put(loginActions.setLoggedIn());
    } else {
        yield put(loginActions.LoginResponse(loginCall));
        yield put(loginActions.disableLoader());
    }
    // no need to call navigate as this is handled by redux store with SwitchNavigator
    //yield call(navigationActions.navigateToHome);
}
