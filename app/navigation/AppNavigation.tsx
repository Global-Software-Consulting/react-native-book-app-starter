import * as React from 'react';
import {ILoginState} from 'models/reducers/login';
import Drawer from 'screens/Drawer';
import BookDetail from './../screens/BookDetail/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import TabNavigator from './TabNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
import NavigationService from './NavigationService';
const AppDrawer = createDrawerNavigator();
interface IState {
  loginReducer: ILoginState;
}
const AppNavigation = () => {
  const isDark = useSelector((state: IState) => state.themeReducer.isDark);

  return (
    <AppDrawer.Navigator drawerContent={() => <Drawer />}>
      <AppDrawer.Screen
        name="Tab"
        component={TabNavigator}
        options={{
          drawerLabel: 'Explore',
          headerShown: false,

          headerStyle: {backgroundColor: isDark ? '#D3D3D3' : 'white'},
          headerTintColor: 'black',
        }}
      />
      <AppDrawer.Screen
        name="BookDetail"
        component={BookDetail}
        options={{
          drawerLabel: 'Book Detail',
          drawerLabelStyle: {alignSelf: 'center'},
          headerLeft: () => (
            <Icon
              name="arrow-back-ios"
              onPress={() => NavigationService.goBack()}
              color="black"
              size={18}
              style={{marginLeft: 20}}
            />
          ),
          headerStyle: {backgroundColor: '#D3D3D3'},
          headerTintColor: 'black',
        }}
      />
    </AppDrawer.Navigator>
  );
};
export default AppNavigation;
