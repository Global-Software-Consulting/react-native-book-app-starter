import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Alert} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Button,
  Caption,
  Paragraph,
  Text,
  List,
  RadioButton,
  Checkbox,
} from 'react-native-paper';
import {useTheme} from 'react-native-paper';
import {useStyles} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ThemeController from '../../components/ThemeController';
import {useDispatch, useSelector} from 'react-redux';
import {TabActions} from '@react-navigation/native';
import * as loginActions from 'store/actions/loginActions';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';

import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

import i18n from '../../config/Languages/index';
const initI18n = i18n;
interface IProps {
  props: IProps;
}
const Drawer: React.FC = props => {
  const [checked, setChecked] = useState('first');
  const userData = useSelector(state => state.loginReducer.userData.result);
  const name = userData?.firstName + ' ' + userData?.lastName;
  const {t, i18n} = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const jumpToExplore = TabActions.jumpTo('Explore');
  const jumpToFavorite = TabActions.jumpTo('Favorite');
  const jumpToUserDetail = TabActions.jumpTo('UserDetail');
  const theme = useTheme();
  const styles = useStyles();
  const onLogout = () => {
    AsyncStorage.removeItem('token');
    dispatch(loginActions.logOut());
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{
              uri: 'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
            }}
            size={50}
          />
          <Title style={styles.title}>{name ?? 'Anonymous'}</Title>
          <Caption style={styles.caption}>@trensik</Caption>
          <View style={styles.row}>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                202
              </Paragraph>
              <Caption style={styles.caption}>Following</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                159
              </Paragraph>
              <Caption style={styles.caption}>Followers</Caption>
            </View>
          </View>
        </View>
        <DrawerItem
          icon={({color, size}) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={color}
              size={size}
            />
          )}
          label={t('Explore')}
          onPress={() => {
            navigation.dispatch(TabActions.jumpTo('Explore'));
          }}
        />
        <DrawerItem
          icon={({color, size}) => (
            <MaterialCommunityIcons name="tune" color={color} size={size} />
          )}
          label={t('Favorite')}
          onPress={() => {
            navigation.dispatch(jumpToFavorite);
          }}
        />
        <DrawerItem
          icon={({color, size}) => (
            <MaterialCommunityIcons
              name="bookmark-outline"
              color={color}
              size={size}
            />
          )}
          label={t('User Details')}
          onPress={() => {
            navigation.dispatch(jumpToUserDetail);
          }}
        />

        <View style={styles.preference}>
          <Text style={styles.text}>{t('Dark Theme')} </Text>
          <ThemeController />
        </View>

        <List.Accordion
          title={<Text style={styles.text}>{t('Languages')} </Text>}>
          <TouchableOpacity
            onPress={() => {
              setChecked('first'), i18n.changeLanguage('en');
            }} //Here I change the language to "en" English
            style={styles.listbutton}>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked('first'), i18n.changeLanguage('en');
              }}
              color="red"
            />
            <Text style={styles.chekboxtext}>English</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setChecked('second'), i18n.changeLanguage('es');
            }} //Here I change the language to "es" Spanish
            style={styles.listbutton}>
            <RadioButton
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked('second'), i18n.changeLanguage('es');
              }}
              color="red"
            />
            <Text style={styles.chekboxtext}>Spanish</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setChecked('third'), i18n.changeLanguage('de');
            }} //Here I change the language to "de" German
            style={styles.listbutton}>
            <RadioButton
              value="third"
              status={checked === 'third' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked('third'), i18n.changeLanguage('de');
              }}
              color="red"
            />
            <Text style={styles.chekboxtext}>German</Text>
          </TouchableOpacity>
        </List.Accordion>

        <TouchableOpacity style={styles.row}>
          <Button icon="logout" onPress={onLogout}>
            {t('Logout')}
          </Button>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default Drawer;
