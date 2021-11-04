import { cloneableGenerator } from '@redux-saga/testing-utils';
import { call, put } from 'redux-saga/effects';
import forgotPassword from '../../../app/services/forgotPassword';
import * as snackbarActions from 'store/actions/snackbarActions';
import forgetPasswordSaga from '../../../app/store/sagas/forgetPasswordSaga';
import * as loadingAction from '../../../app/store/actions/loginActions';
import * as appActions from '../../../app/store/actions/appActions';

const payload = {
    params: 'xyz@yz.com',
};
describe('forgotPassword', () => {
    test('Success case', async () => {
        const gen = cloneableGenerator(forgetPasswordSaga)(payload);
        expect(gen.next().value).toEqual(put(loadingAction.enableLoader()));
        expect(gen.next().value).toEqual(call(forgotPassword, 'xyz@yz.com'));
        expect(gen.next().value).toEqual(put(loadingAction.forgotPasswordResponse()));
        expect(gen.next().value).toEqual(put(loadingAction.disableLoader()));
    });
    test('error', async () => {
        const gen = cloneableGenerator(forgetPasswordSaga)(payload);
        gen.next();
        expect(gen.throw({ exception: 'unexpected exception' }).value).toEqual(
            put(loadingAction.disableLoader()),
        );
        expect(gen.next().value).toEqual(
            put(snackbarActions.enableSnackbar('Error occurred. Please try again.')),
        );
    });
});
