import { call, put } from "redux-saga/effects";
import addBookToFavoite from "services/addBookToFavoite";
import fetchFavoriteBooks from "services/fetchFavoriteBooks"
import * as appActions from "../actions/appActions";



export default function* addBooktoFavorite(action:string) {
  //start loading

// yield put(appActions.IFetchBooksLoading());
  //calling api
  let response = yield call(addBookToFavoite, action.token, action.id);

  if (response && response.status == 'success') {

    yield put(appActions.IFetchBooksLoadingStop())
    
  } 
  else if(response.status != 'success')
  // yield put(appActions.IFetchBooksLoadingStop());
  {

  }
}
