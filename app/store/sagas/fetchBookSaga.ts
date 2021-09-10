import { put, call } from "redux-saga/effects";
import { Alert } from "react-native";
import fetchBooks from "../../services/fetchBooks";
import * as appActions from "../actions/appActions";



export default function* fetchBookAsync(action:string) {
  //start loading
yield put(appActions.IFetchBooksLoading());
  //calling api

  let response = yield call(fetchBooks, action.keyword);
  if (response && response.status == 'success') {
    yield put(appActions.IFetchFavoriteBooksResponse(response.result))
    //ends loading
    yield put(appActions.IFetchBooksLoadingStop());
  } 
  else if(response.status != 'success')


  {

  }
}
