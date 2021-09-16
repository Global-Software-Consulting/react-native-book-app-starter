import { IFetchBooks } from "models/api/fetchBooks";
import { call, put } from "redux-saga/effects";
import fetchBookDetail from "../../services/fetchBookDetail";
import * as appActions from "../actions/appActions";


export interface ResponseGenerator{
  config?:string,
  data?:string,
  headers?:object,
  params?:string,
  request?:object | string | number,
  status?:string,
  statusText?:string,
  result?:object,
  response?: object | undefined,

}

export default function* fetchBookDetailSaga(action:{id:number}) {
  //start loading
yield put(appActions.IFetchBooksLoading());
  //calling api
  let response:ResponseGenerator = yield call(fetchBookDetail, action.id);

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
