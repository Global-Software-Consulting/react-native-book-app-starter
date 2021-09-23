import { useNavigation } from '@react-navigation/core';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ILoginState } from 'models/reducers/login';
import { IThemeState } from 'models/reducers/theme';
import * as React from 'react';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import Drawer from 'components/Drawer';
import BookDetail from './../screens/BookDetail/index';
import TabNavigator from './TabNavigator';
import { reducerState } from 'models/reducers/index';
const AppDrawer = createDrawerNavigator();

const AppNavigation = () => {
    const isDark = useSelector((state: reducerState) => state.themeReducer.isDark);
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
        </AppDrawer.Navigator>
    );
};
export default AppNavigation;
