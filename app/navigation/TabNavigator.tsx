import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/core';
import { DrawerActions } from '@react-navigation/native';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useTheme } from 'react-native-paper';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Explore from './../screens/Explore/index';
import Favorite from './../screens/Favorite/index';
import UserDetail from './../screens/UserDetail/index';
import { useStyles } from './header';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const { t } = useTranslation();
    const navigation = useNavigation();
    const theme = useTheme();
    const styles = useStyles();

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Explore"
                component={Explore}
                options={{
                    headerStyle: {
                        backgroundColor: theme.colors.background,
                    },
                    headerLeft: () => (
                        <TouchableHighlight
                            underlayColor="transparent"
                            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                            <Icon
                                name="menu"
                                size={heightPercentageToDP('4%')}
                                style={styles.Icon}
                            />
                        </TouchableHighlight>
                    ),
                    tabBarLabel: t('Explore'),
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="feature-search-outline"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Favorite"
                component={Favorite}
                options={{
                    headerStyle: {
                        backgroundColor: theme.colors.background,
                    },
                    headerLeft: () => (
                        <TouchableHighlight
                            underlayColor="transparent"
                            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                            <Icon
                                name="menu"
                                size={heightPercentageToDP('4%')}
                                style={styles.Icon}
                            />
                        </TouchableHighlight>
                    ),
                    tabBarLabel: t('Favorite'),
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="heart" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="UserDetail"
                component={UserDetail}
                options={{
                    headerStyle: {
                        backgroundColor: theme.colors.background,
                    },
                    headerLeft: () => (
                        <TouchableHighlight
                            underlayColor="transparent"
                            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                            <Icon
                                name="menu"
                                size={heightPercentageToDP('4%')}
                                style={styles.Icon}
                            />
                        </TouchableHighlight>
                    ),
                    tabBarLabel: t('User Details'),
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="tune" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
export default TabNavigator;
