// export action creators
import * as loginActions from './loginActions';
import * as navigationActions from './navigationActions';
import * as themeActions from './themeActions';
import * as appActions from './appActions';
import * as snackbarActions from './snackbarActions';
export const ActionCreators = Object.assign(
    {},
    loginActions,
    navigationActions,
    themeActions,
    appActions,
    snackbarActions,
);
