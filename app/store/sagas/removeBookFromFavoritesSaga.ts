import { call, put } from 'redux-saga/effects';
import removeBookFromFavoite from 'services/removeBookFromFavoite';
import * as appActions from '../actions/appActions';
import { ResponseGenerator } from 'models/Saga/ResponseGenerator';
import * as loadingActions from 'store/actions/loginActions';


export default function* removeBookfromFavorite(action: { id: number }) {
    try {
    //start loading

    yield put(loadingActions.enableLoader());
    //calling api
    const response: ResponseGenerator = yield call(removeBookFromFavoite, action.id);

    if (response && response?.status === 'success') {
        console.log('Response Printed');
    } else if (response?.status !== 'success') {
        yield put(loadingActions.disableLoader());
    }
}
catch (error) {
    
}
}
