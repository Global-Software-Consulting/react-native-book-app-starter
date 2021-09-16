/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import updateProfile from 'services/updateProfile';
import * as loginActions from 'store/actions/loginActions';
import { ResponseGenerator } from 'models/Saga/ResponseGenerator';
// Our worker Saga that logins the user
export default function* updateUserDetails(action: {data:object}) {
  yield put(loginActions.enableLoader());
  //how to call api
  const response:ResponseGenerator = yield call(updateProfile, action.data);
  //mock response
if (response) {
    yield put(loginActions.IUpdateProfileResponse(response));
    if (response.status == "success")
    {
      yield put(loginActions.userDetailsResponse(response.result))

    }
    yield put(loginActions.disableLoader());
}
    // no need to call navigate as this is handled by redux store with SwitchNavigator
    //yield call(navigationActions.navigateToHome);
  
}


