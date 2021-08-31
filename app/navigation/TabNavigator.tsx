import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ILoginState} from 'models/reducers/login';
import ThemeController from '../components/ThemeController';
import Home from 'screens/Home';
import Settings from 'screens/Settings';
import Favorites from 'screens/Favorites';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const AppStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
interface IState {
  loginReducer: ILoginState;
}
const TabNavigator = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Home" component={Home} options={{
        headerShown:false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Favorites" component={Favorites} 
       options={{
        tabBarLabel: 'Favorites',
        headerShown:false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="heart" color={color} size={size} />
        ),
        tabBarBadge: 2,
      }}/>
      <Tab.Screen name="Settings" component={Settings} 
      options={{
        tabBarLabel: 'Settings',
        headerShown:false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="tune" color={color} size={size} />
        ),
      }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
