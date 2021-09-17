import {
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
    NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ILoginState } from 'models/reducers/login';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';
import { IThemeState } from './models/reducers/theme';
import { navigationRef } from './NavigationService';

const Stack = createNativeStackNavigator();

interface IState {
    themeReducer: IThemeState;
}
interface IState {
    loginReducer: ILoginState;
}

const App: React.FC = () => {
    const isDark = useSelector((state: IState) => state.themeReducer.isDark);
    const isLoggedIn = useSelector((state: IState) => state.loginReducer.isLoggedIn);

    return (
        <NavigationContainer
            ref={navigationRef}
            theme={isDark ? NavigationDarkTheme : NavigationDefaultTheme}>
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
                        name="Login"
                        component={AuthNavigation}
                        options={{ headerShown: false }}
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
