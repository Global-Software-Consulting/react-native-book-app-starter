import {
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
    NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ReducerState } from 'models/reducers/index';
import * as React from 'react';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import * as snackbarActions from 'store/actions/snackbarActions';
import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';
import { navigationRef } from './NavigationService';
import { RootStackProps } from './types';

const Stack = createNativeStackNavigator<RootStackProps>();

const App: React.FC = () => {
    const isDark = useSelector((state: ReducerState) => state.themeReducer.isDark);
    const isLoggedIn = useSelector((state: ReducerState) => state.loginReducer.isLoggedIn);
    const message = useSelector((state: ReducerState) => state.snackbarReducer.snackbarMessage);
    const isVisible = useSelector((state: ReducerState) => state.snackbarReducer.snackbarVisible);
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            dispatch(snackbarActions.disableSnackbar());
        }, 4000);
    }, [isVisible, dispatch]);

    return (
        <NavigationContainer
            ref={navigationRef}
            theme={isDark ? NavigationDarkTheme : NavigationDefaultTheme}>
            <StatusBar barStyle={'default'} />
            <Stack.Navigator>
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
            <Snackbar visible={isVisible} onDismiss={() => {}}>
                {message}
            </Snackbar>
        </NavigationContainer>
    );
};

export default App;
