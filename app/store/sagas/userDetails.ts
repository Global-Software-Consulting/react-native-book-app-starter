import { call, put } from 'redux-saga/effects';
import fetchUserDetails from '../../services/fetchUserDetails';
import * as authActions from '../actions/loginActions';
import { ResponseGenerator } from 'models/Saga/ResponseGenerator';
// Our worker Saga that logins the user
export default function* fetchBookAsync() {
    const response: ResponseGenerator = yield call(fetchUserDetails);
    if (response && response.status === 'success') {
        yield put(authActions.userDetailsResponse(response.result));
    } else if (response.status !== 'success') {
        console.log('Print');
    }
}
