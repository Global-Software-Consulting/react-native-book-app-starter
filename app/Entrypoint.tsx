/**
 * React Native .
 * Everything starts from the Entry-point
 */
import React, { useEffect } from 'react';
import { ActivityIndicator, LogBox } from 'react-native';
import CodePush from 'react-native-code-push';
import { Provider as PaperProvider } from 'react-native-paper';
import { MenuProvider } from 'react-native-popup-menu';
import SplashScreen from 'react-native-splash-screen';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { darkTheme, defaultTheme } from './config/theme';
import { IThemeState } from './models/reducers/theme';
import Navigator from './navigation';
import configureStore from './store';

const { persistor, store } = configureStore();

interface IState {
    themeReducer: IThemeState;
}

const RootNavigation: React.FC = () => {
    const isDark = useSelector((state: IState) => state.themeReducer.isDark);
    LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
    LogBox.ignoreAllLogs(); //Ignore all log notifications
    return (
        <PaperProvider theme={isDark ? darkTheme : defaultTheme}>
            <Navigator />
        </PaperProvider>
    );
};

const EntryPoint: React.FC = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);
    return (
        <Provider store={store}>
            <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
                <MenuProvider>
                    <RootNavigation />
                </MenuProvider>
            </PersistGate>
        </Provider>
    );
};

export default CodePush({
    updateDialog: true,
    installMode: CodePush.InstallMode.IMMEDIATE,
})(EntryPoint);
