import { put, call } from "redux-saga/effects";
import { Alert } from "react-native";
import fetchBooks from "../../services/fetchBooks";
import * as appActions from "../actions/appActions";



export default function* fetchBookAsync(action:string) {
console.log('entered saga')
  //start loading
yield put(appActions.IFetchBooksLoading());
  //calling api
  console.log('input is', action.keyword)

  let response = yield call(fetchBooks, action.keyword);
  console.log('responses are',response)
  if (response && response.status == 'success') {
    yield put(appActions.IFetchBooksResponse(response.result))
    //ends loading
    yield put(appActions.IFetchBooksLoadingStop());
  } 
  else if(response.status != 'success')
  {
    yield put(appActions.IFetchBooksLoadingStop());

  }
}
