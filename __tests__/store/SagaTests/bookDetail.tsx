import { cloneableGenerator } from '@redux-saga/testing-utils';
import { call, put } from 'redux-saga/effects';
import getBookDetail from '../../../app/services/getBookDetail';
import * as snackbarActions from 'store/actions/snackbarActions';
import fetchBookDetailSaga from '../../../app/store/sagas/bookDetailSaga';
import * as loadingAction from '../../../app/store/actions/loginActions';
import * as appActions from '../../../app/store/actions/appActions';

const payload = {
    id: 1,
};
describe('fetchbooksaga', () => {
    test('Test success case', async () => {
        const gen = cloneableGenerator(fetchBookDetailSaga)(payload);
        //first step it performs is enabling laoder
        expect(gen.next().value).toEqual(put(loadingAction.enableLoader()));

        //Is it calling the addbooktofavoriteService
        expect(gen.next().value).toEqual(call(getBookDetail, 1));
        //in the next step we mocked the response and checked what saga does in the next step
        let mockResponse = { result: null };
        expect(gen.next(mockResponse).value).toEqual(put(loadingAction.disableLoader()));
        expect(gen.next().value).toEqual(
            put(snackbarActions.enableSnackbar('Error getting book detail, please try again')),
        );
    });
    test('Test else case with success', async () => {
        const gen = cloneableGenerator(fetchBookDetailSaga)(payload);
        //first step it performs is enabling laoder
        expect(gen.next().value).toEqual(put(loadingAction.enableLoader()));

        //Is it calling the addbooktofavoriteService
        expect(gen.next().value).toEqual(call(getBookDetail, 1));
        //in the next step we mocked the response and checked what saga does in the next step
        let mockResponse = { status: 'success' };
        expect(gen.next(mockResponse).value).toEqual(put(appActions.getBookDetailResponse()));
        expect(gen.next().value).toEqual(put(loadingAction.disableLoader()));
    });

    test('Test else case with network failed', async () => {
        const gen = cloneableGenerator(fetchBookDetailSaga)(payload);
        //first step it performs is enabling laoder
        expect(gen.next().value).toEqual(put(loadingAction.enableLoader()));

        //Is it calling the addbooktofavoriteService
        expect(gen.next().value).toEqual(call(getBookDetail, 1));
        //in the next step we mocked the response and checked what saga does in the next step
        let mockResponse = { status: 'networkFailed' };
        expect(gen.next(mockResponse).value).toEqual(put(loadingAction.disableLoader()));
    });
    test('error', async () => {
        const gen = cloneableGenerator(fetchBookDetailSaga)(payload);
        //Is it calling the addbooktofavoriteService
        gen.next();
        //in the next step we mocked the response and checked what saga does in the next step
        let mockResponse = { status: 'error' };
        expect(gen.throw({ exception: 'unexpected exception' }).value).toEqual(
            put(loadingAction.disableLoader()),
        );
        expect(gen.next().value).toEqual(
            put(snackbarActions.enableSnackbar('Error getting book detail, please try again')),
        );
    });
});
