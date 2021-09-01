import { put } from 'redux-saga/effects';
// import { delay } from 'redux-saga';

import { Alert } from 'react-native';
// import loginUser from 'services/loginUser';
import * as appActions from 'app/store/actions/appActions';

export default function* loginAsync() {
    yield put(appActions.enableLoader());
    fetch('https://ebook-application.herokuapp.com/v1/books').then((res)=>{
        if (res != null) {
        yield put(appActions.fetchBooks(res))
        }
        else {
        Alert.alert("Book App","List cannot be fetched")
        }
    })
}
