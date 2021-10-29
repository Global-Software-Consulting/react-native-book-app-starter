import { cloneableGenerator } from '@redux-saga/testing-utils';
import { call, put } from 'redux-saga/effects';
//services
import getBooks from '../../app/services/getBooks';
import getFavoriteBooks from './../../app/services/getFavoriteBooks';
import getUserDetail from 'services/getUserDetail';
import loginUser from 'services/loginUser';
//actions
import * as snackbarActions from 'store/actions/snackbarActions';
import * as loadingAction from './../../app/store/actions/loginActions';
import * as appActions from './../../app/store/actions/appActions';
//sagas
import loginSaga from '../../app/store/sagas/loginSaga';

const payload = {
    keyword: 'xyz',
};
describe('loginsaga', () => {
    test('Test failed case with network failed', async () => {
        const gen = cloneableGenerator(loginSaga)({ keyword: 'xyz' });
        expect(gen.next().value).toEqual(put(loadingAction.enableLoader()));

        expect(gen.next().value).toEqual(call(loginUser, payload));
        //in the next step we mocked the response and checked what saga does in the next step
        let mockResponse = { status: 'networkFailed' };
        expect(gen.next(mockResponse).value).toEqual(put(loadingAction.disableLoader()));
    });
    test('else with success', async () => {
        const gen = cloneableGenerator(loginSaga)(payload);
        //Is it calling the addbooktofavoriteService
        gen.next();
        gen.next();
        //in the next step we mocked the response and checked what saga does in the next step

        let mockResponseStatus = { status: 'success' };
        expect(gen.next(mockResponseStatus).value).toEqual(call(getUserDetail));
        expect(gen.next(mockResponseStatus).value).toEqual(
            put(loadingAction.userDetailsResponse()),
        );
        expect(gen.next(mockResponseStatus).value).toEqual(call(getFavoriteBooks));
        expect(gen.next(mockResponseStatus).value).toEqual(
            put(appActions.getFavoriteBookResponse()),
        );

        expect(gen.next(mockResponseStatus).value).toEqual(call(getBooks, 'a'));
        expect(gen.next(mockResponseStatus).value).toEqual(put(appActions.getBookResponse()));

        expect(gen.next(mockResponseStatus).value).toEqual(put(loadingAction.setLoggedIn()));
    });
    test('else with no success', async () => {
        const gen = cloneableGenerator(loginSaga)(payload);
        //Is it calling the addbooktofavoriteService
        gen.next();
        gen.next();
        //in the next step we mocked the response and checked what saga does in the next step

        let mockResponseStatus = { status: 'error' };
        expect(gen.next(mockResponseStatus).value).toEqual(put(loadingAction.disableLoader()));
        expect(gen.next().value).toEqual(
            put(snackbarActions.enableSnackbar('Login failed, please check your credentials')),
        );
    });
    test('error', async () => {
        const gen = cloneableGenerator(loginSaga)(payload);
        //Is it calling the addbooktofavoriteService
        gen.next();
        gen.next();
        //in the next step we mocked the response and checked what saga does in the next step
        let mockResponse = { status: 'error' };
        expect(gen.throw({ exception: 'unexpected exception' }).value).toEqual(
            put(loadingAction.disableLoader()),
        );
        expect(gen.next().value).toEqual(
            put(snackbarActions.enableSnackbar('Login failed, please check your credentials')),
        );
    });
});
