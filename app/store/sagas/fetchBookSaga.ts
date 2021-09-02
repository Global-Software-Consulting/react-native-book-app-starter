import { put, call } from "redux-saga/effects";
import { Alert } from "react-native";
import fetchBooks from "../../services/fetchBooks";
import * as appActions from "../actions/appActions";



// Our worker Saga that logins the user
export default function* fetchBookAsync() {
  //start loading
yield put(appActions.IFetchBooksLoading());
  //calling api
  let response = yield call(fetchBooks);
 
  if (response && response.status == 'success') {
    yield put(appActions.IFetchBooksResponse(response))
    //ends loading
    yield put(appActions.IFetchBooksLoadingStop());
  } 
  else if(response.status != 'success')
  {
    yield put(appActions.IFetchBooksLoadingStop());
    Alert.alert('Book App', 'Error fetching book list');
  }
}
