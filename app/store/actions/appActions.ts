/*
 * Reducer actions related with login
 */
import * as types from './types';
import { IFetchBooks } from './../../models/api/fetchBooks';

export function IFetchBooksRequest(keyword: string) {
    return {
        type: types.FETCH_BOOKLIST_REQUEST,
        keyword,
    };
}

export function IFetchBooksResponse(payload: string | object | undefined): {
    type: string;
    payload: string | object | undefined;
} {
    return {
        type: types.FETCH_BOOKLIST_RESPONSE,
        payload,
    };
}

export function IFetchBooksLoading() {
    return {
        type: types.FETCH_LOADING,
    };
}

export function IFetchBooksLoadingStop() {
    return {
        type: types.FETCH_STOPLOADING,
    };
}

export function IFetchFavoriteBooksRequest() {
    return {
        type: types.FETCH_FAVORITE_BOOKLIST_REQUEST,
    };
}

export function IFetchFavoriteBooksResponse(payload: object | string | undefined): {
    type: string;
    payload: object | string | undefined;
} {
    return {
        type: types.FETCH_FAVORITE_BOOKLIST_RESPONSE,
        payload,
    };
}

export function IFetchBookDetailRequest(id: number) {
    return {
        type: types.FETCH_FAVORITE_BOOKDETAIL_REQUEST,
        id,
    };
}

export function IFetchBookDetailResponse(payload: object | string | undefined): {
    type: string;
    payload: object | string | undefined;
} {
    return {
        type: types.FETCH_FAVORITE_BOOKDETAIL_RESPONSE,
        payload,
    };
}
export function IAddToFavoritesRequest(id: number) {
    return {
        type: types.ADD_TO_FAVORITE_REQUEST,
        id,
    };
}

export function IRemoveFromFavoritesRequest(id: number) {
    return {
        type: types.REMOVE_FROM_FAVORITE_REQUEST,
        id,
    };
}
