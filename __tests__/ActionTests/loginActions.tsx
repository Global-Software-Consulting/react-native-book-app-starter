import * as actions from '../../app/store/actions/loginActions';

jest.mock('@react-native-async-storage/async-storage', () => ({
    getItem: jest.fn(),
    setItem: jest.fn(),
}));
jest.mock('react-native-simple-toast', () => ({
    Toast: jest.fn(),
}));
jest.mock('@react-native-community/netinfo', () => ({
    netInfo: jest.fn(),
}));

// jest.mock('setNewFavorites', () => ({
//     action: jest.fn(),
// }));
// it('doStuffThenChangeColor', (assert) => {
//     jest.useFakeTimers('legacy');
//     const gen = cloneableGenerator(fetchBookAsync)();
//     gen.next();
// }, 100000);
// it('doStuffThenChangeColor', (assert) => {
//     jest.useFakeTimers('legacy');
//     const gen = cloneableGenerator(fetchBookAsync)();
//     gen.next();
// }, 100000);

describe('Login Actions', () => {
    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'LOGIN_REQUEST',
        };
        expect(actions.requestLogin()).toEqual(expectedAction);
    });

    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'LOGIN_FAILED',
        };
        expect(actions.loginFailed()).toEqual(expectedAction);
    });

    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'LOGIN_RESPONSE',
        };
        expect(actions.LoginResponse()).toEqual(expectedAction);
    });

    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'LOGIN_ENABLE_LOADER',
        };
        expect(actions.enableLoader()).toEqual(expectedAction);
    });

    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'LOGIN_DISABLE_LOADER',
        };
        expect(actions.disableLoader()).toEqual(expectedAction);
    });

    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'LOG_OUT',
        };
        expect(actions.logOut()).toEqual(expectedAction);
    });

    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'USER_DETAILS_REQUEST',
        };
        expect(actions.userDetailsRequest()).toEqual(expectedAction);
    });

    it('Creation of actions with correct type', () => {
        const payload = [];
        const expectedAction = {
            type: 'SET_TOKEN',
        };
        expect(actions.setToken()).toEqual(expectedAction);
    });

    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'USER_DETAILS_RESPONSE',
        };
        expect(actions.userDetailsResponse()).toEqual(expectedAction);
    });

    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'SIGN_UP_REQUEST',
        };
        expect(actions.signupRequest()).toEqual(expectedAction);
    });

    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'SIGN_UP_RESPONSE',
        };
        expect(actions.signupResponse()).toEqual(expectedAction);
    });

    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'FORGET_PASSWORD_REQUEST',
        };
        expect(actions.forgotPassword()).toEqual(expectedAction);
    });

    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'FORGET_PASSWORD_RESPONSE',
        };
        expect(actions.forgotPasswordResponse()).toEqual(expectedAction);
    });

    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'UPDATE_PROFILE_REQUEST',
        };
        expect(actions.updateProfileRequest()).toEqual(expectedAction);
    });

    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'UPDATE_PROFILE_RESPONSE',
        };
        expect(actions.updateProfileResponse()).toEqual(expectedAction);
    });

    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'CLEAR_LOGIN_RESPONSE',
        };
        expect(actions.clearLoginResponse()).toEqual(expectedAction);
    });

    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'SET_LOGGED_IN',
        };
        expect(actions.setLoggedIn()).toEqual(expectedAction);
    });
});
