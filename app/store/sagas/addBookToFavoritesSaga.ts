import { call, put } from "redux-saga/effects";
import addBookToFavoite from "services/addBookToFavoite";
import * as appActions from "../actions/appActions";
import {ResponseGenerator} from 'models/Saga/ResponseGenerator'


export default function* addBooktoFavorite(action:{id:number}) {
  //start loading

// yield put(appActions.IFetchBooksLoading());
  //calling api
  let response:ResponseGenerator = yield call(addBookToFavoite, action.id);

  if (response && response.status == 'success') {

    yield put(appActions.IFetchBooksLoadingStop())
    
  } 
  else if(response.status != 'success')
  // yield put(appActions.IFetchBooksLoadingStop());
  {

  }
}
