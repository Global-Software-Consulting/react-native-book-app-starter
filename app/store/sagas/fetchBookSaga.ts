import { call, put } from 'redux-saga/effects';
import getBooks from '../../services/getBooks';
import * as appActions from '../actions/appActions';
import Toast from 'react-native-simple-toast'
import { ResponseGenerator } from 'models/Saga/ResponseGenerator';
import * as loadingActions from 'store/actions/loginActions';
import getFavoriteBooks from '../../services/getFavoriteBooks';
import * as snackbarActions from 'store/actions/snackbarActions'

export default function* fetchBookAsync(action: { keyword: string }) {
    try {
        yield put(loadingActions.enableLoader());
        //calling api
    
        const response: ResponseGenerator = yield call(getBooks, action.keyword);
        if (response.status === 'networkFailed') 
        {   
        yield put(loadingActions.disableLoader());
        }
        else {
            if (response && response?.status === 'success') {
                yield put(appActions.getBookResponse(response.result));
                const favoriteBooksResponse: ResponseGenerator = yield call(getFavoriteBooks);
                    yield put(appActions.getFavoriteBookResponse(favoriteBooksResponse.result));
                    yield put(loadingActions.disableLoader());
            }
            else if (response?.status !== 'success')
            {
                yield put(loadingActions.disableLoader());
                yield put(snackbarActions.enableSnackbar('Error loading book list, please try again'))    
            }
        }
    }
    catch (error)
     {
        yield put(loadingActions.disableLoader());
        yield put(snackbarActions.enableSnackbar('Error loading book list, please try again'))
     }
    //start loading
    
}
