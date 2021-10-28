import { appReducer } from '../../app/store/reducers/appReducer';
import * as appData from '../../TestData/Reducer/appData';

describe('login reducer tests', () => {
    it('should return the initial state', () =>
        expect(appReducer(undefined, {})).toEqual({
            books: [],
            favorite: [],
            profilePicture: '',
        }));

    it('should handle "GET_BOOK_REQUEST" action', () => {
        expect(
            appReducer(
                {},
                {
                    type: 'GET_BOOK_REQUEST',
                },
            ),
        ).toEqual({});
    });

    it('should handle "GET_BOOK_RESPONSE" action', () => {
        expect(
            appReducer(
                {},
                {
                    type: 'GET_BOOK_RESPONSE',
                    payload: appData.getBookResponse,
                },
            ),
        ).toEqual({ books: appData.getBookResponse });
    });

    it('should handle "GET_FAVORITE_BOOK_LIST_REQUEST" action', () => {
        expect(
            appReducer(
                {},
                {
                    type: 'GET_FAVORITE_BOOK_LIST_REQUEST',
                },
            ),
        ).toEqual({});
    });

    it('should handle "GET_FAVORITE_BOOK_LIST_RESPONSE" action', () => {
        expect(
            appReducer(
                {},
                {
                    type: 'GET_FAVORITE_BOOK_LIST_RESPONSE',
                    payload: appData.getBookResponse,
                },
            ),
        ).toEqual({ favorite: appData.getBookResponse });
    });

    it('should handle "SET_NEW_FAVORITE_BOOKS" action', () => {
        expect(
            appReducer(
                {},
                {
                    type: 'SET_NEW_FAVORITE_BOOKS',
                    payload: appData.getBookResponse,
                },
            ),
        ).toEqual({ favorite: appData.getBookResponse });
    });

    it('should handle "SET_PROFILE_IMAGE_PATH" action', () => {
        expect(
            appReducer(
                {},
                {
                    type: 'SET_PROFILE_IMAGE_PATH',
                    payload: appData.getProfileImagePath,
                },
            ),
        ).toEqual({ profilePicture: appData.getProfileImagePath });
    });
});
