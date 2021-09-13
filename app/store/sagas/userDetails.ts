import { call, put } from "redux-saga/effects";
import fetchUserDetails from "../../services/fetchUserDetails";
import * as authActions from "../actions/loginActions";

// Our worker Saga that logins the user
export default function* fetchBookAsync(action:string) {

  let response = yield call(fetchUserDetails,action);
  if (response && response.status == 'success') {
    yield put(authActions.userDetailsResponse(response))
  } 
  else if(response.status != 'success')
  {

    yield put(authActions.userDetailsResponse({'status':'fail'}))

  }
}
