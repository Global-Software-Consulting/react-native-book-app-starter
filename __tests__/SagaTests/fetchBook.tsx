import { cloneableGenerator } from '@redux-saga/testing-utils';
import { call, put } from 'redux-saga/effects';
import getBooks from '../../app/services/getBooks';
import getFavoriteBooks from './../../app/services/getFavoriteBooks';

import * as snackbarActions from 'store/actions/snackbarActions';
import fetchBookAsync from '../../app/store/sagas/fetchBookSaga';
import * as loadingAction from './../../app/store/actions/loginActions';
import * as appActions from './../../app/store/actions/appActions';

const payload = {
    keyword: 'xyz',
};
describe('fetchBookSaga', () => {
    test('Test failed case with network failed', async () => {
        const gen = cloneableGenerator(fetchBookAsync)(payload);
        expect(gen.next().value).toEqual(put(loadingAction.enableLoader()));

        expect(gen.next().value).toEqual(call(getBooks, 'xyz'));
        //in the next step we mocked the response and checked what saga does in the next step
        let mockResponse = { status: 'networkFailed' };
        expect(gen.next(mockResponse).value).toEqual(put(loadingAction.disableLoader()));
    });
    test('else with success', async () => {
        const gen = cloneableGenerator(fetchBookAsync)(payload);
        //Is it calling the addbooktofavoriteService
        gen.next();
        gen.next();
        //in the next step we mocked the response and checked what saga does in the next step

        let mockResponseStatus = { status: 'success' };
        expect(gen.next(mockResponseStatus).value).toEqual(put(appActions.getBookResponse()));
        expect(gen.next().value).toEqual(call(getFavoriteBooks));
        expect(gen.next(mockResponseStatus).value).toEqual(
            put(appActions.getFavoriteBookResponse()),
        );
        expect(gen.next().value).toEqual(put(loadingAction.disableLoader()));
    });
    test('else with no success', async () => {
        const gen = cloneableGenerator(fetchBookAsync)(payload);
        //Is it calling the addbooktofavoriteService
        gen.next();
        gen.next();
        //in the next step we mocked the response and checked what saga does in the next step

        let mockResponseStatus = { status: 'other' };

        expect(gen.next(mockResponseStatus).value).toEqual(put(loadingAction.disableLoader()));
        expect(gen.next().value).toEqual(
            put(snackbarActions.enableSnackbar('Error loading book list, please try again')),
        );
    });
    test('error', async () => {
        const gen = cloneableGenerator(fetchBookAsync)(payload);
        //Is it calling the addbooktofavoriteService
        gen.next();
        gen.next();
        //in the next step we mocked the response and checked what saga does in the next step
        let mockResponse = { status: 'error' };
        expect(gen.throw({ exception: 'unexpected exception' }).value).toEqual(
            put(loadingAction.disableLoader()),
        );
        expect(gen.next().value).toEqual(
            put(snackbarActions.enableSnackbar('Error loading book list, please try again')),
        );
    });
});
