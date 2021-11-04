import { cloneableGenerator } from '@redux-saga/testing-utils';
import { call, put } from 'redux-saga/effects';
//services
import getUserDetail from 'services/getUserDetail';
import updateProfile from 'services/updateProfile';

//actions
import * as snackbarActions from 'store/actions/snackbarActions';
import * as loadingAction from '../../../app/store/actions/loginActions';
import * as appActions from '../../../app/store/actions/appActions';
//sagas
import updateProfileDetails from '../../../app/store/sagas/updateProfileDetails';
import { updateProfileResponse } from '../../../app/store/actions/loginActions';

const payload = { params: 'as' };

describe('update profile', () => {
    test('Test with network failed', async () => {
        const gen = cloneableGenerator(updateProfileDetails)(payload);
        expect(gen.next().value).toEqual(put(loadingAction.enableLoader()));
        let mockResponse = { status: 'networkFailed' };
        expect(gen.next().value).toEqual(call(updateProfile, payload));
        expect(gen.next(mockResponse).value).toEqual(put(loadingAction.disableLoader()));
    });
    test('else statement', async () => {
        const gen = cloneableGenerator(updateProfileDetails)({ params: payload });
        gen.next();
        gen.next();
        let mockResponse = { status: 'success' };
        gen.next(mockResponse);
        expect(gen.next().value).toEqual(put(loadingAction.userDetailsResponse()));
    });
    test('unsuccessful response', async () => {
        const gen = cloneableGenerator(updateProfileDetails)({ params: payload });
        gen.next();
        gen.next();
        let mockResponse = { status: 'notSuccess' };
        gen.next(mockResponse);
        expect(gen.next().value).toEqual(
            put(snackbarActions.enableSnackbar('Error updating profile, please try again')),
        );
        expect(gen.next(mockResponse).value).toEqual(put(loadingAction.disableLoader()));
    });
    test('error', async () => {
        const gen = cloneableGenerator(updateProfileDetails)(payload);
        //Is it calling the addbooktofavoriteService
        gen.next();
        //in the next step we mocked the response and checked what saga does in the next step
        let mockResponse = { status: 'error' };
        expect(gen.throw({ exception: 'unexpected exception' }).value).toEqual(
            put(loadingAction.disableLoader()),
        );
        expect(gen.next().value).toEqual(
            put(snackbarActions.enableSnackbar('Error updating profile, please try again')),
        );
    });
});
