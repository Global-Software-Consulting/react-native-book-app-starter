import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { useWindowDimensions } from 'react-native';
import Favorites from 'screens/Favorites';
import Home from 'screens/Home';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    const dimensions = useWindowDimensions();
    return (
        <Drawer.Navigator
            defaultStatus="open"
            screenOptions={{
                drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
            }}>
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{ drawerLabel: 'Home page Option' }}
            />
            <Drawer.Screen
                name="Favorites"
                component={Favorites}
                options={{ drawerLabel: 'Fav page Option' }}
            />
        </Drawer.Navigator>
    );
};
export default DrawerNavigator;
