import * as actions from '../../app/store/actions/appActions';

describe('App Actions', () => {
    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'GET_BOOK_RESPONSE',
        };
        expect(actions.getBookResponse()).toEqual(expectedAction);
    });

    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'GET_BOOK_REQUEST',
        };
        expect(actions.getBookRequest()).toEqual(expectedAction);
    });

    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'GET_FAVORITE_BOOK_LIST_REQUEST',
        };
        expect(actions.getFavoriteBookRequest()).toEqual(expectedAction);
    });

    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'GET_FAVORITE_BOOK_LIST_RESPONSE',
        };
        expect(actions.getFavoriteBookResponse()).toEqual(expectedAction);
    });

    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'GET_BOOKDETAIL_REQUEST',
        };
        expect(actions.getBookDetailRequest()).toEqual(expectedAction);
    });

    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'GET_BOOKDETAIL_RESPONSE',
        };
        expect(actions.getBookDetailResponse()).toEqual(expectedAction);
    });

    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'ADD_TO_FAVORITE_REQUEST',
        };
        expect(actions.addBookToFavoriteRequest()).toEqual(expectedAction);
    });

    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'REMOVE_FROM_FAVORITE_REQUEST',
        };
        expect(actions.removeBookToFavoriteRequest()).toEqual(expectedAction);
    });

    it('Creation of actions with correct type', () => {
        const payload = [];
        const expectedAction = {
            type: 'SET_NEW_FAVORITE_BOOKS',
        };
        expect(actions.setNewFavorites()).toEqual(expectedAction);
    });

    it('Creation of actions with correct type', () => {
        const expectedAction = {
            type: 'SET_PROFILE_IMAGE_PATH',
        };
        expect(actions.setProfileImagePath()).toEqual(expectedAction);
    });
});
