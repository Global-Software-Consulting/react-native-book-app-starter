import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ILoginState} from 'models/reducers/login';
import ThemeController from '../components/ThemeController';
import Drawer from 'screens/Drawer';
import Home from './../screens/Home/index'
import TabNavigator from './TabNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
const AppDrawer = createDrawerNavigator();
const AppStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
interface IState {
  loginReducer: ILoginState;
}
const AppNavigation = () => {
  return (
    <AppDrawer.Navigator drawerContent={() => <Drawer />}>
    <AppDrawer.Screen name="Explore" component={TabNavigator}   options={{ drawerLabel: 'Explore' }} />
    <AppDrawer.Screen name="Home" component={Home}  options={{ drawerLabel: 'Home' }} />
    </AppDrawer.Navigator>
  );
};
export default AppNavigation;
