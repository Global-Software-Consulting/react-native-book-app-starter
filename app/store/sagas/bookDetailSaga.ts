import { call, put } from 'redux-saga/effects';
import fetchBookDetail from '../../services/fetchBookDetail';
import * as appActions from '../actions/appActions';
import * as loadingActions from 'store/actions/loginActions';

interface IData {
    data: [];
}

export interface ResponseGenerator {
    config?: string;
    data?: string;
    headers?: IData;
    params?: string;
    request?: IData | string | number;
    status?: string;
    statusText?: string;
    result?: IData;
    response?: IData | undefined;
}

export default function* fetchBookDetailSaga(action: { id: number }) {
   
    try {
 //start loading
 yield put(loadingActions.enableLoader());
 //calling api
 const response: ResponseGenerator = yield call(fetchBookDetail, action.id);

 if (response && response?.status === 'success') {
     yield put(appActions.getBookDetailResponse(response.result));
     //ends loading
     yield put(loadingActions.disableLoader());
    } else if (response?.status !== 'success') {
     console.log('Error fetching book detail');
 }
    }
    catch (error) {
        
    }
   
}
