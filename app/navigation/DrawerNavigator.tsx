import * as React from 'react';
import { useWindowDimensions } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ILoginState} from 'models/reducers/login';
import Home from 'screens/Home';
import Favorites from 'screens/Favorites';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const AppStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
interface IState {
  loginReducer: ILoginState;
}
const DrawerNavigator = () => {
  const dimensions = useWindowDimensions();
    const homeOptions = {
        title: 'Home',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:20,
          color:"black"
        }
      };
  return (
    <Drawer.Navigator defaultStatus="open" screenOptions={{
      
      drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
    }}
  >
    
    <Drawer.Screen name="Home" component={Home} options={{ drawerLabel: 'Home page Option' }}/>
    <Drawer.Screen name="Favorites" component={Favorites} options={{ drawerLabel: 'Fav page Option' }}/>
  </Drawer.Navigator>

  );
};
export default DrawerNavigator;
