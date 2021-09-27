import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ReducerState } from 'models/reducers/index';
import * as React from 'react';
import { useSelector } from 'react-redux';
import ForgotPassword from 'screens/ForgotPassword';
import Login from 'screens/Login';
import Signup from 'screens/Signup/index';
const AuthStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    const isLoggedIn = useSelector((state: ReducerState) => state.loginReducer.isLoggedIn);

    return (
        <AuthStack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 20,
                        color: 'black',
                    },
                    headerShown: false,

                    // When logging out, a pop animation feels intuitive
                    // You can remove this if you want the default 'push' animation
                    animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
                }}
            />
            <Stack.Screen
                name="Signup"
                component={Signup}
                options={{
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 20,
                        color: 'black',
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
                        fontSize: 20,
                        color: 'black',
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
