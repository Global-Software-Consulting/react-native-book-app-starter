import { useNavigation } from '@react-navigation/core';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Drawer from 'components/Drawer';
import { ReducerState } from 'models/reducers/index';
import * as React from 'react';
import { Dimensions, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import BookReader from 'screens/BookReader';
import { getPercentageHeight, getPercentageWidth } from 'utils/dimentionUtil';
import BookDetail from './../screens/BookDetail/index';
import TabNavigator from './TabNavigator';
const AppDrawer = createDrawerNavigator();

const AppNavigation = () => {
    const isDark = useSelector((state: ReducerState) => state.themeReducer.isDark);
    const navigation = useNavigation();
    const theme = useTheme();
    const width = getPercentageWidth();
    const height = getPercentageHeight();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
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
                        <TouchableOpacity
                            style={{ flexDirection: 'row' }}
                            onPress={() => navigation.goBack()}>
                            <Icon
                                name="arrow-back-ios"
                                color={theme.colors.text}
                                size={windowHeight > windowWidth ? width('5%') : height('5%')}
                                style={{ marginLeft: 20 }}
                            />
                            <Text
                                style={{
                                    color: theme.colors.text,
                                    fontSize:
                                        windowHeight > windowWidth ? width('4%') : height('4%'),
                                }}>
                                Back
                            </Text>
                        </TouchableOpacity>
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
                        <TouchableOpacity
                            style={{ flexDirection: 'row' }}
                            onPress={() => navigation.goBack()}>
                            <Icon
                                name="arrow-back-ios"
                                color={theme.colors.text}
                                size={windowHeight > windowWidth ? width('5%') : height('5%')}
                                style={{ marginLeft: 20 }}
                            />
                            <Text
                                style={{
                                    color: theme.colors.text,
                                    fontSize:
                                        windowHeight > windowWidth ? width('4%') : height('4%'),
                                }}>
                                Back
                            </Text>
                        </TouchableOpacity>
                    ),
                    headerStyle: { backgroundColor: theme.colors.background },
                    headerTintColor: theme.colors.text,
                }}
            />
        </AppDrawer.Navigator>
    );
};
export default AppNavigation;
