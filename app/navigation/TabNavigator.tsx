import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ILoginState} from 'models/reducers/login';
import ThemeController from '../components/ThemeController';
import Home from 'screens/Home';
import Favorite from './../screens/Favorite/index';
import Explore from './../screens/Explore/index';
import UserDetail from './../screens/UserDetail/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const AppStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

interface IState {
  loginReducer: ILoginState;
}
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          headerShown: false,
          tabBarLabel: 'Explore',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="feature-search-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarLabel: 'Favorite',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="UserDetail"
        component={UserDetail}
        options={{
          tabBarLabel: 'UserDetail',

          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="tune" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
