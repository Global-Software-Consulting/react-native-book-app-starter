import createReducer from 'lib/createReducer';
import { IAppState } from 'models/reducers/appReducers';
import * as types from 'store/actions/types';
import { IBookResponse } from '../../models/actions/appActions';

const initialState: IAppState = {
    books: [],
    favorite: [],
    profilePicture:''
};

export const appReducer = createReducer(initialState, {
    [types.GET_BOOK_REQUEST](state: IAppState) {
        return {
            ...state,
        };
    },
    [types.GET_BOOK_RESPONSE](state: IAppState, action: IBookResponse) {
        return {
            ...state,
            books: action.payload,
        };
    },
    [types.GET_FAVORITE_BOOK_LIST_REQUEST](state: IAppState) {
        return {
            ...state,
        };
    },
    [types.GET_FAVORITE_BOOK_LIST_RESPONSE](state: IAppState, action: IBookResponse) {
        return {
            ...state,
            favorite: action.payload,
        };
    },

    [types.SET_NEW_FAVORITE_BOOKS](state: IAppState, action: IBookResponse) {
        return {
            ...state,
            favorite: action.payload,
        };
    },
    [types.SET_PROFILE_IMAGE_PATH](state: IAppState, action: IBookResponse) {
        return {
            ...state,
            profilePicture: action.payload,
        };
    },
});
