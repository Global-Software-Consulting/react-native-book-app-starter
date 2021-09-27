import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { DrawerActions, TabActions } from '@react-navigation/native';
import i18n from 'config/Languages/i18n';
import { ReducerState } from 'models/reducers/index';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';
import { Avatar, Button, List, RadioButton, Text, Title } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from 'store/actions/loginActions';
import * as themeActions from 'store/actions/themeActions';
import ThemeController from '../ThemeController';
import { useStyles } from './styles';

const Drawer: React.FC = (props) => {
    const { t } = useTranslation();
    const [checked, setChecked] = useState('first');
    const userData = useSelector((state: ReducerState) => state.loginReducer.user);
    const [name, setName] = useState(userData?.firstName + ' ' + userData?.lastName);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const Explore = TabActions.jumpTo('Explore');
    const Favorite = TabActions.jumpTo('Favorite');
    const Detail = TabActions.jumpTo('UserDetail');
    const styles = useStyles();
    const onLogout = () => {
        AsyncStorage.removeItem('token');
        dispatch(loginActions.logOut());
        dispatch(themeActions.setIsDarkTheme(false));
    };
    useEffect(() => {
        setName(userData?.firstName + ' ' + userData?.lastName);
        if (i18n.language === 'en') setChecked('first');
        else if (i18n.language === 'es') setChecked('second');
        else if (i18n.language === 'de') setChecked('third');
    }, [userData]);

    const checkEnglish = () => {
        setChecked('first');
        i18n.changeLanguage('en');
    };

    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.dispatch(Detail);
                            navigation.dispatch(DrawerActions.toggleDrawer());
                        }}>
                        <Avatar.Image
                            source={{
                                uri: 'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
                            }}
                            size={50}
                        />
                        <Title style={styles.title}>{name ?? 'Anonymous'}</Title>
                    </TouchableOpacity>
                </View>
                <DrawerItem
                    icon={({ color, size }) => (
                        <MaterialCommunityIcons name="account-outline" color={color} size={size} />
                    )}
                    label={t('Explore')}
                    onPress={() => {
                        navigation.dispatch(Explore);
                        navigation.dispatch(DrawerActions.toggleDrawer());
                    }}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <MaterialCommunityIcons name="tune" color={color} size={size} />
                    )}
                    label={t('Favorite')}
                    onPress={() => {
                        navigation.dispatch(Favorite);
                        navigation.dispatch(DrawerActions.toggleDrawer());
                    }}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <MaterialCommunityIcons name="bookmark-outline" color={color} size={size} />
                    )}
                    label={t('User Details')}
                    onPress={() => {
                        navigation.dispatch(Detail);
                        navigation.dispatch(DrawerActions.toggleDrawer());
                    }}
                />

                <View style={styles.preference}>
                    <Text style={styles.text}>{t('Dark Theme')} </Text>
                    <ThemeController />
                </View>

                <List.Accordion title={<Text style={styles.text}>{t('Languages')} </Text>}>
                    <TouchableOpacity
                        onPress={() => {
                            setChecked('first');
                            i18n.changeLanguage('en');
                        }} //Here I change the language to "en" English
                        style={styles.listbutton}>
                        <RadioButton
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={checkEnglish}
                            color="red"
                        />
                        <Text style={styles.chekboxtext}>English</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setChecked('second');
                            i18n.changeLanguage('es');
                        }} //Here I change the language to "es" Spanish
                        style={styles.listbutton}>
                        <RadioButton
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked('second');
                                i18n.changeLanguage('es');
                            }}
                            color="red"
                        />
                        <Text style={styles.chekboxtext}>Spanish</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setChecked('third');
                            i18n.changeLanguage('de');
                        }} //Here I change the language to "de" German
                        style={styles.listbutton}>
                        <RadioButton
                            value="third"
                            status={checked === 'third' ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked('third');
                                i18n.changeLanguage('de');
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
