import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, Image, TextInput, View } from 'react-native';
import { Button } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Text } from 'react-native-paper';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from 'screens/UserDetail/styles';
import { useNavigation } from '@react-navigation/core';
import ImagePicker from 'react-native-image-crop-picker';
import * as loginActions from 'store/actions/loginActions';
import * as appActions from 'store/actions/appActions';
import { ReducerState } from 'models/reducers/index';
import PictureViewer from 'components/PictureViewer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { nullLiteralTypeAnnotation } from '@babel/types';
const UserDetail: React.FC = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state: ReducerState) => state.loginReducer.user);
    const isLoading = useSelector((state: ReducerState) => state.loadingReducer.isLoading);
    //defining states
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState<string>(userData?.firstName);
    const [lastName, setLastName] = useState<string>(userData?.lastName);
    const [email, setEmail] = useState<string>(userData?.email);
    const [isEnlarged, setIsEnlarged] = useState(false);
    const { t } = useTranslation();
    const styles = useStyles();
    const navigation = useNavigation();
    const update = async () => {
        setIsEditing(!isEditing);
        editUser();
    };
    const [image, setImage] = useState<string>(
        'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
    );

    const getAuthToken = async () => {
        try {
            const value = await AsyncStorage.getItem('token');
            if (value !== null) {
                return value;
            }
            return '';
        } catch (e) {
            return '';
        }
    };

    const getImagePath = async (token: string) => {
        try {
            const value = await AsyncStorage.getItem(token);
            if (value !== null) {
                return value;
            }
            return '';
        } catch (e) {
            return '';
        }
    };

    const openCamera = async () => {
        const token = await getAuthToken();
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then((image) => {
            storePictureURI(image.path, token).then(() => {
                dispatch(appActions.setProfileImagePath(image.path));
                setImage(image.path);
            });
        });
    };
    const storePictureURI = async (value: string, token: string) => {
        try {
            await AsyncStorage.setItem(token, value);
        } catch (e) {}
    };
    const editUser = async () => {
        if (isEditing) {
            dispatch(loginActions.updateProfileRequest({ firstName, lastName, email }));
        }
    };
    // const recallUserData = () => {
    //     dispatch(loginActions.userDetailsRequest());
    // };

    const loadImage = async () => {
        const token = await getAuthToken();
        const path = await getImagePath(token);
        if (path !== '') {
            setImage(path);
        }
    };

    useEffect(() => {
        loadImage();
    });
    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <Menu>
                <MenuTrigger triggerOnLongPress={true} customStyles={triggerStyles}>
                    <Image
                        source={userData?.image !== undefined ? userData.image : { uri: image }}
                        style={styles.displayPicture}
                    />
                </MenuTrigger>
                <MenuOptions>
                    <MenuOption
                        onSelect={() => {
                            setIsEnlarged(true);
                        }}
                        text={t('View')}
                    />
                    <MenuOption
                        onSelect={() => {
                            openCamera();
                        }}>
                        <Text style={{ color: 'red' }}>{t('Capture')}</Text>
                    </MenuOption>
                </MenuOptions>
            </Menu>
            <Text style={styles.mainHeading}>{t('Profile Details')}</Text>
            {!isEditing ? (
                <View>
                    <View style={styles.infoView}>
                        <Text style={styles.subHeading}>{t('First Name')}:</Text>
                        <Text> {firstName}</Text>
                    </View>

                    <View style={styles.infoView}>
                        <Text style={styles.subHeading}>{t('Last Name')}:</Text>
                        <Text> {lastName}</Text>
                    </View>

                    <View style={styles.infoView}>
                        <Text style={styles.subHeading}>{t('Email')}:</Text>
                        <Text> {email}</Text>
                    </View>
                </View>
            ) : (
                <View>
                    <View style={styles.infoInputView}>
                        <Text style={styles.subHeading}>{t('First Name')}: </Text>
                        <TextInput
                            style={styles.inputField}
                            placeholder="Enter your first name"
                            value={firstName}
                            onChangeText={(text) => setFirstName(text)}
                        />
                    </View>

                    <View style={styles.infoInputView}>
                        <Text style={styles.subHeading}>{t('Last Name')}: </Text>
                        <TextInput
                            style={styles.inputField}
                            placeholder="Enter your last name"
                            value={lastName}
                            onChangeText={(text) => setLastName(text)}
                        />
                    </View>

                    <View style={styles.infoInputView}>
                        <Text style={styles.subHeading}>{t('Email')}: </Text>
                        <TextInput
                            style={styles.inputField}
                            placeholder="Enter your email address"
                            value={email}
                            textContentType="emailAddress"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            spellCheck={false}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                </View>
            )}
            <View style={styles.submitView}>
                <Button
                    onPress={() => {
                        update();
                    }}
                    disabled={isLoading}
                    style={styles.submit}>
                    <Text style={{ color: 'white' }}>{!isEditing ? t('Edit') : t('Update')}</Text>
                </Button>
                {isLoading && <ActivityIndicator color="white" style={styles.activity} />}
            </View>
            <PictureViewer
                isVisible={isEnlarged}
                imageSource={{
                    uri: 'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
                }}
                onPress={() => setIsEnlarged(false)}
            />
        </KeyboardAwareScrollView>
    );
};

export default UserDetail;
const triggerStyles: object = {
    triggerWrapper: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    triggerTouchable: {
        underlayColor: 'transparent',
        activeOpacity: 70,
    },
};
