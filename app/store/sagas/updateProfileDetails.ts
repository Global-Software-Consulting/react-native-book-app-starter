/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
// import { delay } from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { put ,call} from 'redux-saga/effects';
import updateProfile from 'services/updateProfile'
import * as loginActions from 'store/actions/loginActions';

// Our worker Saga that logins the user
export default function* updateUserDetails(action) {
  yield put(loginActions.enableLoader());
console.log('actiono params', action)
  //how to call api
  const response = yield call(updateProfile, action.data);
  //mock response
console.log('bloooot', response)
if (response) {
    yield put(loginActions.IUpdateProfileResponse(response));
    yield put(loginActions.disableLoader());
}
    // no need to call navigate as this is handled by redux store with SwitchNavigator
    //yield call(navigationActions.navigateToHome);
  
}


