import { ISnackbar } from 'models/reducers/snackbar';
import { IAppState } from 'models/reducers/appReducers';
import { ILoginState } from 'models/reducers/login';
import { ILoading } from './loading';
import { IThemeState } from './theme';

export interface ReducerState {
    appReducer: IAppState;
    loginReducer: ILoginState;
    loadingReducer: ILoading;
    snackbarReducer: ISnackbar;
    themeReducer: IThemeState;
}
