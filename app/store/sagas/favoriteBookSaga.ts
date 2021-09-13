import { call, put } from "redux-saga/effects";
import fetchFavoriteBooks from "../../services/fetchFavoriteBooks";
import * as appActions from "../actions/appActions";


export default function* fetchFavoriteBookAsync(action:string) {
  //start loading
yield put(appActions.IFetchBooksLoading());
  //calling api
  let response = yield call(fetchFavoriteBooks, action);
console.log('Response favorite', response);

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
