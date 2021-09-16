import { call, put } from "redux-saga/effects";
import fetchBooks from "../../services/fetchBooks";
import * as appActions from "../actions/appActions";
import {ResponseGenerator} from 'models/Saga/ResponseGenerator'



export default function* fetchBookAsync(action:{keyword:string}) {
  //start loading
yield put(appActions.IFetchBooksLoading());
  //calling api

  let response:ResponseGenerator = yield call(fetchBooks, action.keyword);
  if (response && response.status == 'success') {
    yield put(appActions.IFetchBooksResponse(response.result))
    //ends loading
    yield put(appActions.IFetchBooksLoadingStop());
  } 
  else if(response.status != 'success')
  yield put(appActions.IFetchBooksResponse(response))

  {

  }
  
}
