import { call, put } from "redux-saga/effects";
import addBookToFavoite from "services/addBookToFavoite";
import fetchFavoriteBooks from "services/fetchFavoriteBooks"
import * as appActions from "../actions/appActions";



export default function* addBooktoFavorite(action:string) {
  //start loading

// yield put(appActions.IFetchBooksLoading());
  //calling api
  console.log('paramo', action)
  let response = yield call(addBookToFavoite,action.params);
console.log('response detailo', response);

  if (response && response.status == 'success') {

    yield put(appActions.IFetchBooksLoadingStop())
    let favBooks = yield call(fetchFavoriteBooks,action.params);

    if (response && response.status == 'Success') {
      yield put(appActions.IFetchFavoriteBooksResponse(favBooks.result))
    }

  } 
  else if(response.status != 'success')
  // yield put(appActions.IFetchBooksLoadingStop());
  {

  }
}
