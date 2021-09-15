import { call, put } from "redux-saga/effects";
import fetchBookDetail from "../../services/fetchBookDetail";
import * as appActions from "../actions/appActions";



export default function* fetchBookDetailSaga(action) {
  console.log('actiono', action)
  //start loading
yield put(appActions.IFetchBooksLoading());
  //calling api
  let response = yield call(fetchBookDetail, parseInt(action.id));
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
