/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
// import { delay } from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { yellow100 } from 'react-native-paper/lib/typescript/styles/colors';
import { put, call } from 'redux-saga/effects';
import loginUser from 'services/loginUser';
import fetchUserDetails from 'services/fetchUserDetails';
import fetchBooks from 'services/fetchBooks';
import fetchFavoriteBooks from 'services/fetchFavoriteBooks'
import * as loginActions from 'store/actions/loginActions';
import * as appActions from 'store/actions/appActions'
import {ResponseGenerator} from 'models/Saga/ResponseGenerator'

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('token', value)
  
  } catch (e) {
    // saving error
  }
}

// Our worker Saga that logins the user
export default function* loginAsync(action) {
  yield put(loginActions.enableLoader());
  //how to call api
  const loginCall = yield call(loginUser, action.params);
  //mock response
if (loginCall.status != 'error')
{
  yield put(loginActions.disableLoader());

  yield call(storeData,loginCall.token);
  yield put(loginActions.LoginResponse(loginCall.token));

  const userDetailCall:ResponseGenerator = yield call(fetchUserDetails); 
  yield put(loginActions.userDetailsResponse(userDetailCall.result))

  const favoriteBookCall:ResponseGenerator = yield call(fetchFavoriteBooks); 
  yield put(appActions.IFetchFavoriteBooksResponse(favoriteBookCall.result))

  let fetchBookCall:ResponseGenerator = yield call(fetchBooks, 'a');
  yield put(appActions.IFetchBooksResponse(fetchBookCall.result))

    yield put (loginActions.setLoggedIn())
}
else {
  yield put(loginActions.LoginResponse(loginCall));
  yield put(loginActions.disableLoader());

}
    // no need to call navigate as this is handled by redux store with SwitchNavigator
    //yield call(navigationActions.navigateToHome);
  
}


