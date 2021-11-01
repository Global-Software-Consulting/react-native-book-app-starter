import { cloneableGenerator } from '@redux-saga/testing-utils';
import { call, put } from 'redux-saga/effects';
import removeBookFromFavoite from 'services/removeBookFromFavoite';
import * as snackbarActions from 'store/actions/snackbarActions';
import removeBookFromFavoritesSaga from '../../app/store/sagas/removeBookFromFavoritesSaga';
import * as loadingAction from './../../app/store/actions/loginActions';

const payload = {
    id: 1,
};
describe('addBookToFavoriteSaga', () => {
    test('Test success case', async () => {
        const gen = cloneableGenerator(removeBookFromFavoritesSaga)(payload);
        expect(gen.next().value).toEqual(put(loadingAction.enableLoader()));
        //Is it calling the addbooktofavoriteService
        expect(gen.next().value).toEqual(call(removeBookFromFavoite, 1));
        //in the next step we mocked the response and checked what saga does in the next step
        let mockResponse = { status: 'success' };
    });
    test('Test network failed', async () => {
        const gen = cloneableGenerator(removeBookFromFavoritesSaga)(payload);
        //Is it calling the addbooktofavoriteService
        gen.next();
        gen.next();

        //in the next step we mocked the response and checked what saga does in the next step
        let mockResponse = { status: 'networkFailed' };
        expect(gen.next(mockResponse).value).toEqual(put(loadingAction.disableLoader()));
    });
    test('else condition', async () => {
        const gen = cloneableGenerator(removeBookFromFavoritesSaga)(payload);
        //Is it calling the addbooktofavoriteService
        gen.next();
        gen.next();
        //in the next step we mocked the response and checked what saga does in the next step
        let mockResponse = { status: 'else' };
        expect(gen.next(mockResponse).value).toEqual(put(loadingAction.disableLoader()));
        expect(gen.next().value).toEqual(
            put(snackbarActions.enableSnackbar('Error removing book from the favorites')),
        );
    });
    test('error', async () => {
        const gen = cloneableGenerator(removeBookFromFavoritesSaga)(payload);
        //Is it calling the addbooktofavoriteService
        gen.next();
        //in the next step we mocked the response and checked what saga does in the next step
        let mockResponse = { status: 'error' };
        expect(gen.throw({ exception: 'unexpected exception' }).value).toEqual(
            put(loadingAction.disableLoader()),
        );
        expect(gen.next().value).toEqual(
            put(snackbarActions.enableSnackbar('Error removing book from the favorites')),
        );
    });
});
