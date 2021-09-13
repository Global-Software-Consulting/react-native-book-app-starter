import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text} from 'react-native-paper';
import {ILoginState} from 'models/reducers/login';
import ThemeController from '../components/ThemeController';
import Home from 'screens/Home';
import Favorite from './../screens/Favorite/index';
import Explore from './../screens/Explore/index';
import UserDetail from './../screens/UserDetail/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import i18n from './../../../components/Languages/i18n';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {DrawerActions} from '@react-navigation/native';
import {useStyles} from './header';
import {useNavigation} from '@react-navigation/core';
import {useTheme} from 'react-native-paper';
import {themeTools} from 'native-base';
const Tab = createBottomTabNavigator();
const AppStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

interface IState {
  loginReducer: ILoginState;
}

const TabNavigator = () => {
  const initI18n = i18n;
  const {t, i18n} = useTranslation();
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
          tabBarIcon: ({color, size}) => (
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
          tabBarIcon: ({color, size}) => (
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
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="tune" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
