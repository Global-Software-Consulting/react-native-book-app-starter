import { useNavigation } from '@react-navigation/core';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Drawer from 'components/Drawer';
import { ReducerState } from 'models/reducers/index';
import * as React from 'react';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import BookReader from 'screens/BookReader';
import BookDetail from './../screens/BookDetail/index';
import TabNavigator from './TabNavigator';
const AppDrawer = createDrawerNavigator();

const AppNavigation = () => {
    const isDark = useSelector((state: ReducerState) => state.themeReducer.isDark);
    const navigation = useNavigation();
    const theme = useTheme();

    return (
        <AppDrawer.Navigator drawerContent={() => <Drawer />}>
            <AppDrawer.Screen
                name="Tab"
                component={TabNavigator}
                options={{
                    drawerLabel: 'Explore',
                    headerShown: false,
                    headerStyle: { backgroundColor: isDark ? '#D3D3D3' : 'white' },
                    headerTintColor: 'black',
                }}
            />
            <AppDrawer.Screen
                name="BookDetail"
                component={BookDetail}
                options={{
                    drawerLabel: 'Book Detail',
                    drawerLabelStyle: { alignSelf: 'center' },
                    headerLeft: () => (
                        <Icon
                            name="arrow-back-ios"
                            onPress={() => navigation.goBack()}
                            color={theme.colors.text}
                            size={18}
                            style={{ marginLeft: 20 }}
                        />
                    ),
                    headerStyle: { backgroundColor: theme.colors.background },
                    headerTintColor: theme.colors.text,
                }}
            />

            <AppDrawer.Screen
                name="BookReader"
                component={BookReader}
                options={{
                    drawerLabel: 'Book Reader',
                    drawerLabelStyle: { alignSelf: 'center' },
                    headerLeft: () => (
                        <Icon
                            name="arrow-back-ios"
                            onPress={() => navigation.goBack()}
                            color={theme.colors.text}
                            size={18}
                            style={{ marginLeft: 20 }}
                        />
                    ),
                    headerStyle: { backgroundColor: theme.colors.background },
                    headerTintColor: theme.colors.text,
                }}
            />
        </AppDrawer.Navigator>
    );
};
export default AppNavigation;
