import { cloneableGenerator } from '@redux-saga/testing-utils';
import { call, put } from 'redux-saga/effects';
//services
import getBooks from '../../../app/services/getBooks';
import getFavoriteBooks from '../../../app/services/getFavoriteBooks';
import getUserDetail from 'services/getUserDetail';
import signupUser from 'services/signupUser';
import storeData from 'services/signupUser';

//actions
import * as snackbarActions from 'store/actions/snackbarActions';
import * as loadingAction from '../../../app/store/actions/loginActions';
import * as appActions from '../../../app/store/actions/appActions';
//sagas
import signUpsync from '../../../app/store/sagas/signupSaga';

const payload = { params: 'as' };
const response = { token: 'as' };

describe('signupSaga', () => {
    test('Test with successful storage of data', async () => {
        const gen = cloneableGenerator(signUpsync)({ params: payload });
        expect(gen.next().value).toEqual(put(loadingAction.enableLoader()));

        expect(gen.next().value).toEqual(call(signupUser, { params: 'as' }));
        //in the next step we mocked the response and checked what saga does in the next step
        let mockResponse = { status: 'success' };
        expect(gen.next(mockResponse).done).toBe(false);

        expect(gen.next(mockResponse).value).toEqual(put(loadingAction.userDetailsResponse()));

        expect(gen.next(mockResponse).value).toEqual(call(getFavoriteBooks));
        expect(gen.next(mockResponse).value).toEqual(put(appActions.getFavoriteBookResponse()));

        expect(gen.next(mockResponse).value).toEqual(call(getBooks, 'a'));
        expect(gen.next(mockResponse).value).toEqual(put(appActions.getBookResponse()));
        expect(gen.next(mockResponse).value).toEqual(put(loadingAction.setLoggedIn()));
        expect(gen.next(mockResponse).value).toEqual(
            put(snackbarActions.enableSnackbar('Signup successful')),
        );
        expect(gen.next(mockResponse).value).toEqual(put(loadingAction.disableLoader()));
    });
    test('Test with error in status', async () => {
        const gen = cloneableGenerator(signUpsync)({ params: payload });
        gen.next();
        gen.next();
        let mockResponse = { status: 'error' };
        expect(gen.next(mockResponse).value).toEqual(put(loadingAction.disableLoader()));
        expect(gen.next(mockResponse).value).toEqual(
            put(snackbarActions.enableSnackbar('Email already exists')),
        );
    });
    test('Test with network error', async () => {
        const gen = cloneableGenerator(signUpsync)({ params: payload });
        gen.next();
        gen.next();
        let mockResponse = { status: 'networkFailed' };
        expect(gen.next(mockResponse).value).toEqual(put(loadingAction.disableLoader()));
    });
    test('error', async () => {
        const gen = cloneableGenerator(signUpsync)(payload);
        //Is it calling the addbooktofavoriteService
        gen.next();
        //in the next step we mocked the response and checked what saga does in the next step
        let mockResponse = { status: 'error' };
        expect(gen.throw({ exception: 'unexpected exception' }).value).toEqual(
            put(loadingAction.disableLoader()),
        );
        expect(gen.next().value).toEqual(
            put(
                snackbarActions.enableSnackbar(
                    'Error registering user, please check the credentials',
                ),
            ),
        );
    });
});
