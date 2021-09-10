import { put, call } from "redux-saga/effects";
import { Alert } from "react-native";
import fetchBookDetail from "../../services/fetchBookDetail";
import * as appActions from "../actions/appActions";



export default function* fetchFavoriteBookAsync(action:any) {
  //start loading
yield put(appActions.IFetchBooksLoading());
  //calling api
  let response = yield call(fetchBookDetail, action);
console.log('response detail', response);

  if (response && response.status == 'success') {
    yield put(appActions.IFetchBookDetailResponse(response.result))
    //ends loading
    yield put(appActions.IFetchBooksLoadingStop());
  } 
  else if(response.status != 'success')
  yield put(appActions.IFetchBooksLoadingStop());


  {

  }
}
