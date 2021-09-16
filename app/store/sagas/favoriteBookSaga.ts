import { call, put } from "redux-saga/effects";
import fetchFavoriteBooks from "../../services/fetchFavoriteBooks";
import * as appActions from "../actions/appActions";
import {ResponseGenerator} from 'models/Saga/ResponseGenerator'


export default function* fetchFavoriteBookAsync(action:{token:string}) {
  //start loading
yield put(appActions.IFetchBooksLoading());
  //calling api
  let response:ResponseGenerator = yield call(fetchFavoriteBooks);

  if (response && response.status == 'Success') {
    yield put(appActions.IFetchFavoriteBooksResponse(response.result))
    //ends loading
    yield put(appActions.IFetchBooksLoadingStop());
  } 
  else if(response.status != 'success')
  yield put(appActions.IFetchBooksLoadingStop());


  {

  }
}
