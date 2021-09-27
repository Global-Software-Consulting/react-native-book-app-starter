import { ResponseGenerator } from 'models/Saga/ResponseGenerator';
import { call, put } from 'redux-saga/effects';
import removeBookFromFavoite from 'services/removeBookFromFavoite';
import * as loadingActions from 'store/actions/loginActions';
import * as snackbarActions from 'store/actions/snackbarActions';

export default function* removeBookfromFavorite(action: { id: number }) {
    try {
        //start loading

        yield put(loadingActions.enableLoader());
        //calling api
        const response: ResponseGenerator = yield call(removeBookFromFavoite, action.id);

        if (response && response?.status === 'success') {
            console.log('Response Printed');
        } else if (response?.status === 'networkFailed') {
            yield put(loadingActions.disableLoader());
        } else {
            yield put(loadingActions.disableLoader());
            yield put(snackbarActions.enableSnackbar('Error removing book from the favorites'));
        }
    } catch (error) {
        yield put(loadingActions.disableLoader());
        yield put(snackbarActions.enableSnackbar('Error removing book from the favorites'));
    }
}
