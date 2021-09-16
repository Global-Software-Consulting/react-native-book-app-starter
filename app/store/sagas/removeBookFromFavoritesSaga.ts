import { call, put } from "redux-saga/effects";
import removeBookFromFavoite from "services/removeBookFromFavoite";
import * as appActions from "../actions/appActions";



export default function* removeBookfromFavorite(action:string) {
  //start loading

yield put(appActions.IFetchBooksLoading());
  //calling api
  let response = yield call(removeBookFromFavoite,action.token,action.id);

  if (response && response.status == 'success') {


  } 
  else if(response.status != 'success')
  yield put(appActions.IFetchBooksLoadingStop());
  {

  }
}
