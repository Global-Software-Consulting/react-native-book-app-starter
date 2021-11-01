import { cloneableGenerator } from '@redux-saga/testing-utils';
import { call, put } from 'redux-saga/effects';
//services
import getUserDetail from '../../app/services/getUserDetail';
//actions
import * as snackbarActions from 'store/actions/snackbarActions';
import * as loadingAction from './../../app/store/actions/loginActions';
import * as appActions from './../../app/store/actions/appActions';
//sagas
import userDetails from '../../app/store/sagas/userDetails';

const payload = { params: 'as' };

describe('update profile', () => {
    test('Test with successful response', async () => {
        const gen = cloneableGenerator(userDetails)();
        expect(gen.next().value).toEqual(call(getUserDetail));
        let mockResponse = { status: 'success' };
        expect(gen.next(mockResponse).value).toEqual(put(loadingAction.userDetailsResponse()));
    });
    test('Test with network failed', async () => {
        const gen = cloneableGenerator(userDetails)();
        gen.next();
        let mockResponse = { status: 'networkFailed' };
        expect(gen.next(mockResponse).value).toEqual(put(loadingAction.disableLoader()));
    });
    test('Test with unsuccessful response', async () => {
        const gen = cloneableGenerator(userDetails)();
        gen.next();
        let mockResponse = { status: 'notSuccessful' };
        expect(gen.next(mockResponse).value).toEqual(put(loadingAction.disableLoader()));

        expect(gen.next().value).toEqual(
            put(snackbarActions.enableSnackbar('Error getting user detail, please try again.')),
        );
    });
    test('error', async () => {
        const gen = cloneableGenerator(userDetails)(payload);
        //Is it calling the addbooktofavoriteService
        gen.next();
        //in the next step we mocked the response and checked what saga does in the next step
        let mockResponse = { status: 'error' };
        expect(gen.throw({ exception: 'unexpected exception' }).value).toEqual(
            put(loadingAction.disableLoader()),
        );
        expect(gen.next().value).toEqual(
            put(snackbarActions.enableSnackbar('Error getting user detail, please try again.')),
        );
    });
});
