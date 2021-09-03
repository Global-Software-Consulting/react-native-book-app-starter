import * as React from 'react';
import { Button } from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ILoginState} from 'models/reducers/login';
import ThemeController from '../components/ThemeController';
import Drawer from 'screens/Drawer';
import BookDetail from './../screens/BookDetail/index';
import Home from './../screens/Home/index'
import TabNavigator from './TabNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NavigationService from './NavigationService';
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
    <AppDrawer.Screen name="BookDetail" component={BookDetail}   options={{ drawerLabel: 'Book Detail', headerRight: () => (
            <Button
              onPress={() => NavigationService.goBack()}
              color='white'
              style={{backgroundColor:'#6666ff', marginHorizontal:5, marginBottom: 5}}
            >Back</Button>   )}} />

    </AppDrawer.Navigator>
  );
};
export default AppNavigation;
