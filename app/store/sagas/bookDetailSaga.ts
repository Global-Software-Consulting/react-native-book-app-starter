import { call, put } from 'redux-saga/effects';
import fetchBookDetail from '../../services/fetchBookDetail';
import * as appActions from '../actions/appActions';

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
    //start loading
    yield put(appActions.IFetchBooksLoading());
    //calling api
    const response: ResponseGenerator = yield call(fetchBookDetail, action.id);

    if (response && response.status === 'success') {
        yield put(appActions.IFetchBookDetailResponse(response.result));
        //ends loading
        yield put(appActions.IFetchBooksLoadingStop());
    } else if (response.status !== 'success') {
    }
}
