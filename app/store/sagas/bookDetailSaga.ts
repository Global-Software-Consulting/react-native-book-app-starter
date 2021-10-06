import { call, put } from 'redux-saga/effects';
import * as loadingActions from 'store/actions/loginActions';
import * as snackbarActions from 'store/actions/snackbarActions';
import getBookDetail from '../../services/getBookDetail';
import * as appActions from '../actions/appActions';
import { Response } from './types';

export default function* fetchBookDetailSaga(action: { id: number }) {
    try {
        //start loading
        yield put(loadingActions.enableLoader());
        //calling api
        const response: Response = yield call(getBookDetail, action.id);
       
        if (response?.result === null) {
            yield put(loadingActions.disableLoader());
            //error message not available in response
            yield put(
                snackbarActions.enableSnackbar('Error getting book detail, please try again'),
            );
        }
        else {
            if (response && response?.status === 'success') {
                yield put(appActions.getBookDetailResponse(response.result));
                //ends loading
                yield put(loadingActions.disableLoader());
            } else if (response?.status === 'networkFailed') {
                yield put(loadingActions.disableLoader());
            }
        }
        } catch (error) {
            yield put(loadingActions.disableLoader());
            yield put(snackbarActions.enableSnackbar('Error getting book detail, please try again'));
        }
    
}
