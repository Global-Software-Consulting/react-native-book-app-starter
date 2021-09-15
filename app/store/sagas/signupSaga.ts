/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
// import { delay } from 'redux-saga';
import { Alert } from 'react-native';
import { put, call } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import signupUser from 'services/signupUser';
import * as loginActions from 'store/actions/loginActions';
import fetchUserDetails from 'services/fetchUserDetails';
import fetchFavoriteBooks from 'services/fetchFavoriteBooks'
import fetchBooks from 'services/fetchBooks';
import * as appActions from 'store/actions/appActions'

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('token', value)
  
  } catch (e) {
    // saving error
  }
}

// Our worker Saga that logins the user
export default function* signUpsync(action:any) {
  yield put(loginActions.enableLoader());
const response = yield call(signupUser, action.params)
  if (response && response.status == "success") {
    yield put(loginActions.ISignupResponse(response));
    yield call(storeData,response.token);
    yield put(loginActions.disableLoader());

    const userDetailCall = yield call(fetchUserDetails); 
  yield put(loginActions.userDetailsResponse(userDetailCall.result))

  const favoriteBookCall = yield call(fetchFavoriteBooks); 
  yield put(appActions.IFetchFavoriteBooksResponse(favoriteBookCall.result))

  let fetchBookCall = yield call(fetchBooks, 'a');
    yield put(appActions.IFetchBooksResponse(fetchBookCall.result))
    // no need to call navigate as this is handled by redux store with SwitchNavigator
    //yield call(navigationActions.navigateToHome);
  } else {
    yield put(loginActions.disableLoader());
   
  }
}

