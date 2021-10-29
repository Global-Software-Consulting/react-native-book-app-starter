import { cloneableGenerator } from '@redux-saga/testing-utils';
import { call, put } from 'redux-saga/effects';
import addBookToFavorite from 'services/addBookToFavoite';
import * as snackbarActions from 'store/actions/snackbarActions';
import addBookToFavoite from '../../app/store/sagas/addBookToFavoritesSaga';
import * as loadingAction from './../../app/store/actions/loginActions';

jest.mock('react-native-simple-toast', () => {
    return {
        Toast: jest.fn(),
    };
});
jest.mock('@react-native-community/netinfo', () => ({
    netInfo: jest.fn(),
}));
const payload = {
    id: 1,
};
describe('addBookToFavoriteSaga', () => {
    test('Test success case', async () => {
        const gen = cloneableGenerator(addBookToFavoite)(payload);
        //Is it calling the addbooktofavoriteService
        expect(gen.next().value).toEqual(call(addBookToFavorite, 1));
        //in the next step we mocked the response and checked what saga does in the next step
        let mockResponse = { status: 'success' };
        expect(gen.next(mockResponse).value).toEqual(put(loadingAction.disableLoader()));
    });
    test('Test network failed', async () => {
        const gen = cloneableGenerator(addBookToFavoite)(payload);
        //Is it calling the addbooktofavoriteService
        gen.next();
        //in the next step we mocked the response and checked what saga does in the next step
        let mockResponse = { status: 'networkFailed' };
        expect(gen.next(mockResponse).value).toEqual(put(loadingAction.disableLoader()));
    });
    test('else condition', async () => {
        const gen = cloneableGenerator(addBookToFavoite)(payload);
        //Is it calling the addbooktofavoriteService
        gen.next();
        //in the next step we mocked the response and checked what saga does in the next step
        let mockResponse = { status: 'else' };
        expect(gen.next(mockResponse).value).toEqual(put(loadingAction.disableLoader()));
        expect(gen.next().value).toEqual(
            put(snackbarActions.enableSnackbar('Error adding book to the favorites')),
        );
    });
    test('error', async () => {
        const gen = cloneableGenerator(addBookToFavoite)(payload);
        //Is it calling the addbooktofavoriteService
        gen.next();
        //in the next step we mocked the response and checked what saga does in the next step
        let mockResponse = { status: 'error' };
        expect(gen.throw({ exception: 'unexpected exception' }).value).toEqual(
            put(loadingAction.disableLoader()),
        );
        expect(gen.next().value).toEqual(
            put(snackbarActions.enableSnackbar('Error adding book to the favorites')),
        );
    });
});
