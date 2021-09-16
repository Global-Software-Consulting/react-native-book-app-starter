import { call, put } from "redux-saga/effects";
import removeBookFromFavoite from "services/removeBookFromFavoite";
import * as appActions from "../actions/appActions";
import { ResponseGenerator } from "models/Saga/ResponseGenerator";


export default function* removeBookfromFavorite(action: {id:number}) {
  //start loading

yield put(appActions.IFetchBooksLoading());
  //calling api
  let response:ResponseGenerator = yield call(removeBookFromFavoite,action.id);

  if (response && response.status == 'success') {


  } 
  else if(response.status != 'success')
  yield put(appActions.IFetchBooksLoadingStop());
  {

  }
}
