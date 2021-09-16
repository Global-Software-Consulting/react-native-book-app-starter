import {createDrawerNavigator} from '@react-navigation/drawer';
import {ILoginState} from 'models/reducers/login';
import * as React from 'react';
import {useWindowDimensions} from 'react-native';
import Favorites from 'screens/Favorites';
import Home from 'screens/Home';
const Drawer = createDrawerNavigator();
interface IState {
  loginReducer: ILoginState;
}
const DrawerNavigator = () => {
  const dimensions = useWindowDimensions();
  const homeOptions = {
    title: 'Home',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20,
      color: 'black',
    },
  };
  return (
    <Drawer.Navigator
      defaultStatus="open"
      screenOptions={{
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{drawerLabel: 'Home page Option'}}
      />
      <Drawer.Screen
        name="Favorites"
        component={Favorites}
        options={{drawerLabel: 'Fav page Option'}}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
