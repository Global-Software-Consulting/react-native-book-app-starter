/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
// import { delay } from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { call, put } from 'redux-saga/effects';
import fetchBooks from 'services/fetchBooks';
import fetchFavoriteBooks from 'services/fetchFavoriteBooks';
import fetchUserDetails from 'services/fetchUserDetails';
import signupUser from 'services/signupUser';
import * as appActions from 'store/actions/appActions';
import * as loginActions from 'store/actions/loginActions';
import { ResponseGenerator } from 'models/Saga/ResponseGenerator';
const storeData = async (value:any) => {
  try {
    await AsyncStorage.setItem('token', value)
  
  } catch (e) {
    // saving error
  }
}

// Our worker Saga that logins the user
export default function* signUpsync(action:any) {
  yield put(loginActions.enableLoader());
const response:ResponseGenerator = yield call(signupUser, action.params)
  if (response && response.status == "success") {
    yield put(loginActions.ISignupResponse(response));
    yield call(storeData,response.token);
    yield put(loginActions.disableLoader());

    const userDetailCall:ResponseGenerator = yield call(fetchUserDetails); 
  yield put(loginActions.userDetailsResponse(response.result))

  const favoriteBookCall:ResponseGenerator = yield call(fetchFavoriteBooks); 
  yield put(appActions.IFetchFavoriteBooksResponse(favoriteBookCall.result))

  let fetchBookCall:ResponseGenerator = yield call(fetchBooks, 'a');
    yield put(appActions.IFetchBooksResponse(fetchBookCall.result))
    // no need to call navigate as this is handled by redux store with SwitchNavigator
    //yield call(navigationActions.navigateToHome);
  } else {
    yield put(loginActions.disableLoader());
   
  }
}

