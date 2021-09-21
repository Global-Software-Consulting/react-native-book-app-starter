import { ResponseGenerator } from 'models/Saga/ResponseGenerator';
import { call, put } from 'redux-saga/effects';
import addBookToFavoite from 'services/addBookToFavoite';
import * as appActions from '../actions/appActions';
import * as loadingActions from 'store/actions/loginActions';
export default function* addBooktoFavorite(action: { id: number }) {
    try {
        const response: ResponseGenerator = yield call(addBookToFavoite, action.id);

        if (response && response?.status === 'success') {
            yield put(appActions.disableLoading());
        } else if (response?.status !== 'success') {
            // yield put(appActions.disableLoading());
        }    
    } catch (error) {
        
    }
    
}
