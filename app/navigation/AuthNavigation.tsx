import * as React from 'react';

import {useSelector} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ILoginState} from 'models/reducers/login';
import ThemeController from '../components/ThemeController';

const AuthStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
import Login from 'screens/Login';
import ForgotPassword from 'screens/ForgotPassword';
interface IState {
  loginReducer: ILoginState;
}
const AuthNavigator = () => {
  const isLoggedIn = useSelector(
    (state: IState) => state.loginReducer.isLoggedIn,
  );
  return (
    <AuthStack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
      
        options={{
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:20,
            color:"black",
          },
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
        }}
        
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:20,
            color:"black",
          },
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
        }}
      />
    </AuthStack.Navigator>
  );
};
export default AuthNavigator;
