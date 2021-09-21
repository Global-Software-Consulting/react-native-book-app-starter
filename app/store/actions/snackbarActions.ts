/*
 * Reducer actions related with login
 */
import * as types from './types';

export function showSnackbar() {
    return {
        type: types.SHOW_SNACKBAR,
    };
}

export function hideSnackbar() {
    return {
        type: types.HIDE_SNACKBAR,
    };
}

export function storeMessageInSnackbar(payload:string) {
    return {
        type: types.STORE_MESSAGE_IN_SNACKBAR,
        payload
    };
}

export function clearMessageFromSnackbar() {
    return {
        type: types.CLEAR_MESSAGE_FROM_SNACKBAR,
    };
}