import {
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
    NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ILoginState } from 'models/reducers/login';
import * as React from 'react';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { IStateReducer } from 'models/reducers/index';
import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';
import { Button, Snackbar } from 'react-native-paper';
import { navigationRef } from './NavigationService';
import * as snackbarActions from 'store/actions/snackbarActions';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
    const isDark = useSelector(
        (state: { themReducer: IStateReducer }) => state.themeReducer.isDark,
    );
    const isLoggedIn = useSelector(
        (state: { loginReducer: IStateReducer }) => state.loginReducer.isLoggedIn,
    );
    const message = useSelector(
        (state: { snackbarReducer: IStateReducer }) => state.snackbarReducer.snackbarMessage,
    );
    const isVisible = useSelector(
        (state: { snackbarReducer: IStateReducer }) => state.snackbarReducer.snackbarVisible,
    );
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            dispatch(snackbarActions.disableSnackbar());
        }, 4000);
    }, [isVisible]);

    return (
        <NavigationContainer ref={navigationRef}>
            <StatusBar barStyle={'default'} />
            <Stack.Navigator headerMode="none">
                {isLoggedIn ? (
                    <Stack.Screen
                        name="Home"
                        component={AppNavigation}
                        options={{ headerShown: false }}
                    />
                ) : (
                    <Stack.Screen
                        name="Auth"
                        component={AuthNavigation}
                        options={{ headerShown: false }}
                    />
                )}
            </Stack.Navigator>
            <Snackbar visible={isVisible}>{message}</Snackbar>
        </NavigationContainer>
    );
};

export default App;
