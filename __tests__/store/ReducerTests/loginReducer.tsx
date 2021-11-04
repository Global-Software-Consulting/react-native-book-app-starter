import { loginReducer } from '../../../app/store/reducers/loginReducer';
import * as loginData from '../../../TestData/Reducer/loginData';
describe('login reducer tests', () => {
    it('should return the initial state', () =>
        expect(loginReducer(undefined, {})).toEqual({
            isLoggedIn: false,
            user: {
                email: '',
                firstName: '',
                gender: '',
                lastName: '',
                status: '',
            },
        }));

    it('should handle "LOGIN_REQUEST" action', () => {
        expect(
            loginReducer(
                {},
                {
                    type: 'LOGIN_REQUEST',
                    username: loginData.loginRequestData.username,
                    password: loginData.loginRequestData.password,
                },
            ),
        ).toEqual({
            username: loginData.loginRequestData.username,
            password: loginData.loginRequestData.password,
        });
    });

    it('should handle "LOGIN_LOADING_ENDED" action', () => {
        expect(
            loginReducer(
                {},
                {
                    type: 'LOGIN_LOADING_ENDED',
                },
            ),
        ).toEqual({});
    });

    it('should handle "SET_LOGGED_IN" action returning logged in ', () => {
        expect(
            loginReducer(
                { isLoggedIn: true },
                {
                    type: 'SET_LOGGED_IN',
                },
            ),
        ).toEqual({
            isLoggedIn: true,
        });
    });
    it('should handle "USER_DETAILS_RESPONSE" action ', () => {
        expect(
            loginReducer(
                {},
                {
                    type: 'USER_DETAILS_RESPONSE',
                    payload: loginData.userDetail,
                },
            ),
        ).toEqual({
            user: loginData.userDetail,
        });
    });

    it('should handle "SIGN_UP_RESPONSE" action ', () => {
        expect(
            loginReducer(
                {},
                {
                    type: 'SIGN_UP_RESPONSE',
                    payload: loginData.userDetail,
                },
            ),
        ).toEqual({
            user: loginData.userDetail,
        });
    });

    it('should handle "FORGET_PASSWORD_RESPONSE" action ', () => {
        expect(
            loginReducer(
                {},
                {
                    type: 'FORGET_PASSWORD_RESPONSE',
                    payload: loginData.forgotPasswordResponseData,
                },
            ),
        ).toEqual({
            forgetPasswordResponse: loginData.forgotPasswordResponseData,
        });
    });
});
