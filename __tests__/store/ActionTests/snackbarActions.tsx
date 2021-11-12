import * as actions from '../../../app/store/actions/snackbarActions';

describe('App Actions', () => {
    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'ENABLE_SNACKBAR',
        };
        expect(actions.enableSnackbar()).toEqual(expectedAction);
    });

    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'DISABLE_SNACKBAR',
        };
        expect(actions.disableSnackbar()).toEqual(expectedAction);
    });
});
