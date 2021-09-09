import * as React from 'react';
import {NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector, useDispatch} from 'react-redux';
import AuthNavigation from './AuthNavigation';
import {navigationRef} from './NavigationService';
import {IThemeState} from './models/reducers/theme';
import ThemeController from '../components/ThemeController';
import {StatusBar, View} from 'react-native';
import {ILoginState} from 'models/reducers/login';
import AppNavigation from './AppNavigation';

const Stack = createNativeStackNavigator();

interface IState {
  themeReducer: IThemeState;
}
interface IState {
  loginReducer: ILoginState;
}

interface IProps {}
const App: React.FC<IProps> = (props: IProps) => {
  const isDark = useSelector((state: IState) => state.themeReducer.isDark);
  const isLoggedIn = useSelector(state => state.loginReducer.isLoggedIn);

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
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={AuthNavigation}
            options={{headerShown: false}}
            // options={{
            //   // When logging out, a pop animation feels intuitive
            //   // You can remove this if you want the default 'push' animation
            //   animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
            //   // headerRight: () => <ThemeController />,
            // }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
