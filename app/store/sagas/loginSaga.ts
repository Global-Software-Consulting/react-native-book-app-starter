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
import * as loginActions from 'store/actions/loginActions';

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('token', jsonValue)
  } catch (e) {
    // saving error
  }
}

// Our worker Saga that logins the user
export default function* loginAsync(action) {
  yield put(loginActions.enableLoader());
console.log('actionado',action)
  //how to call api
  const response = yield call(loginUser, action.params);
  //mock response
  console.log('login response',response)
if (response.token != '')
{
    yield put(loginActions.LoginResponse(response.token));
    storeData(response.token);

    yield put (loginActions.setLoggedIn())
    yield put(loginActions.disableLoader());
}
    // no need to call navigate as this is handled by redux store with SwitchNavigator
    //yield call(navigationActions.navigateToHome);
  
}


