/*
 * Reducer actions related with login
 */
import * as types from './types';

export function enableSnackbar(payload: string) {
    return {
        type: types.ENABLE_SNACKBAR,
        payload,
    };
}

export function disableSnackbar() {
    return {
        type: types.DISABLE_SNACKBAR,
    };
}
