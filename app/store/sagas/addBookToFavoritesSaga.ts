import { ResponseGenerator } from 'models/Saga/ResponseGenerator';
import { call, put } from 'redux-saga/effects';
import addBookToFavoite from 'services/addBookToFavoite';
import * as loadingActions from 'store/actions/loginActions';
import * as snackbarActions from 'store/actions/snackbarActions';
export default function* addBookToFavorite(action: { id: number }) {
    try {
        const response: ResponseGenerator = yield call(addBookToFavoite, action.id);

        if (response && response?.status === 'success') {
            yield put(loadingActions.disableLoader());
        } else if (response?.status === 'networkFailed') {
            yield put(loadingActions.disableLoader());
        } else {
            yield put(loadingActions.disableLoader());
            //error message not available in response
            yield put(snackbarActions.enableSnackbar('Error adding book to the favorites'));
        }
    } catch (error) {
        yield put(loadingActions.disableLoader());
        yield put(snackbarActions.enableSnackbar('Error adding book to the favorites'));
    }
}
