import { cloneableGenerator } from '@redux-saga/testing-utils';
import { call, put } from 'redux-saga/effects';
import getFavoriteBooks from './../../app/services/getFavoriteBooks';
import * as snackbarActions from 'store/actions/snackbarActions';
import fetchFavoriteBookAsync from '../../app/store/sagas/favoriteBookSaga';
import * as loadingAction from './../../app/store/actions/loginActions';
import * as appActions from './../../app/store/actions/appActions';

const payload = {
    id: 1,
};
describe('addBookToFavoriteSaga', () => {
    test('Test success case', async () => {
        const gen = cloneableGenerator(fetchFavoriteBookAsync)(payload);
        expect(gen.next().value).toEqual(put(loadingAction.enableLoader()));

        //Is it calling the addbooktofavoriteService
        expect(gen.next().value).toEqual(call(getFavoriteBooks));
        //in the next step we mocked the response and checked what saga does in the next step
        let mockResponse = { status: 'Success' };
        expect(gen.next(mockResponse).value).toEqual(put(appActions.getFavoriteBookResponse()));
        expect(gen.next().value).toEqual(put(loadingAction.disableLoader()));
    });
    test('Test network failed', async () => {
        const gen = cloneableGenerator(fetchFavoriteBookAsync)(payload);
        //Is it calling the addbooktofavoriteService
        gen.next();
        gen.next();
        //in the next step we mocked the response and checked what saga does in the next step
        let mockResponse = { status: 'networkFailed' };
        expect(gen.next(mockResponse).value).toEqual(put(loadingAction.disableLoader()));
    });
    test('else condition', async () => {
        const gen = cloneableGenerator(fetchFavoriteBookAsync)(payload);
        //Is it calling the addbooktofavoriteService
        gen.next();
        gen.next();

        //in the next step we mocked the response and checked what saga does in the next step
        let mockResponse = { status: 'else' };
        expect(gen.next(mockResponse).value).toEqual(put(loadingAction.disableLoader()));
        expect(gen.next(mockResponse).value).toEqual(
            put(snackbarActions.enableSnackbar('Error getting favorite books, please try again')),
        );
    });
    test('error', async () => {
        const gen = cloneableGenerator(fetchFavoriteBookAsync)(payload);
        //Is it calling the addbooktofavoriteService
        gen.next();

        //in the next step we mocked the response and checked what saga does in the next step
        let mockResponse = { status: 'error' };
        expect(gen.throw({ exception: 'unexpected exception' }).value).toEqual(
            put(loadingAction.disableLoader()),
        );
        expect(gen.next().value).toEqual(
            put(snackbarActions.enableSnackbar('Error getting favorite books, please try again')),
        );
    });
});
