import { useNavigation } from '@react-navigation/core';
import { IStateReducer } from 'models/reducers/index';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ActivityIndicator, Image, Text, TextInput, useWindowDimensions, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import socialLogin from 'utils/socialLogin';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import images from './../../config/images';
import * as loginActions from './../../store/actions/loginActions';
import { ILoginData } from './types';
import { useTranslation } from 'react-i18next';
GoogleSignin.configure();
const Login: React.FC = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { t, i18n } = useTranslation();
    const [secure, setSecure] = useState(true);
    const [showActivityIndicator, setShowActivityIndicator] = useState(false);
    const isLoading = useSelector((state: IStateReducer) => state.loadingReducer.isLoading);
    const message = useSelector((state: IStateReducer) => state.snackbarReducer.snackbarMessage);

    //form data
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const performLoginOperation = async (data: ILoginData) => {
        setShowActivityIndicator(isLoading);
        dispatch(loginActions.requestLogin(data));
    };

    const onSubmit = (data: ILoginData) => {
        performLoginOperation(data);
    };

    const loginWithGoogle = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            const x = JSON.stringify(userInfo);
            console.log('Google response', x);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };

    return (
        <KeyboardAwareScrollView style={{ backgroundColor: 'white' }}>
            <Image
                source={images.app.logo}
                style={{
                    alignSelf: 'center',
                    marginTop: 20,
                    width: widthPercentageToDP('40%'),
                    height: heightPercentageToDP('30%'),
                }}
            />
            <Text
                style={{
                    fontSize: 30,
                    fontWeight: '500',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    marginTop: 20,
                }}>
                {t('Log In Now')}
            </Text>
            <Text
                style={{
                    fontSize: 15,
                    fontWeight: '300',
                    color: 'grey',
                    alignSelf: 'center',
                }}>
                {t('Please login to continue using our app')}
            </Text>

            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        placeholder={t('Enter your email address')}
                        autoCapitalize="none"
                        textContentType="emailAddress"
                        keyboardType="email-address"
                        autoCorrect={false}
                        style={{
                            width: widthPercentageToDP('80%'),
                            height: 50,
                            padding: 5,
                            alignSelf: 'center',
                            borderWidth: 1,
                            borderRadius: 20,
                            marginTop: 10,
                            backgroundColor: 'white',
                        }}
                        value={value}
                        onChangeText={(text) => onChange(text)}
                    />
                )}
                name="email"
                defaultValue=""
            />
            {errors.email && <Text style={{ alignSelf: 'center' }}>{t('Email is required')}</Text>}

            <View
                style={{
                    flexDirection: 'row',
                    borderColor: 'black',
                    borderWidth: 1,
                    borderRadius: 30,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: widthPercentageToDP('80%'),
                    height: 50,
                    marginTop: 5,
                    alignSelf: 'center',
                }}>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            placeholder={t('Enter your password')}
                            autoCapitalize="none"
                            secureTextEntry={secure}
                            autoCorrect={false}
                            style={{
                                padding: 5,
                                alignSelf: 'center',
                                borderRadius: 20,
                                margin: 5,
                                backgroundColor: 'white',
                                width: widthPercentageToDP('60%'),
                            }}
                            value={value}
                            onChangeText={(text) => onChange(text)}
                        />
                    )}
                    name="password"
                    defaultValue=""
                />

                <Icon
                    name="remove-red-eye"
                    size={30}
                    style={{ margin: 6 }}
                    onPress={() => setSecure(!secure)}
                />
            </View>
            {errors.password && (
                <Text style={{ alignSelf: 'center' }}>{t('Password is required')}</Text>
            )}

            <TouchableHighlight
                style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                }}
                underlayColor="transparent"
                onPress={() => navigation.navigate('ForgotPassword')}>
                <Text
                    style={{
                        alignSelf: 'flex-end',
                        marginRight: 20,
                        color: 'black',
                        justifyContent: 'center',
                    }}
                    onPress={() => navigation.navigate('ForgotPassword')}>
                    {t('Forgot Password')}
                </Text>
            </TouchableHighlight>

            <View
                style={{
                    backgroundColor: '#491484',
                    alignContent: 'center',
                    alignSelf: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    marginTop: 15,
                }}>
                <Button
                    onPress={handleSubmit(onSubmit)}
                    disabled={showActivityIndicator}
                    style={{
                        height: 40,
                        width: widthPercentageToDP('60%'),
                        marginTop: 5,
                    }}>
                    <Text style={{ color: 'white' }}>{t('Log in')}</Text>
                </Button>
                {isLoading && <ActivityIndicator color="white" style={{ margin: 5 }} />}
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 5 }}>
                <Text>{t('Do not have an account?')} </Text>
                <Text style={{ color: '#db7093' }} onPress={() => navigation.navigate('Signup')}>
                    {t('Sign up')}
                </Text>
            </View>

            {
                <Text
                    style={{
                        alignSelf: 'center',
                        marginTop: 5,
                        marginBottom: 5,
                        color: 'red',
                    }}></Text>
            }
            <View style={{ alignItems: 'center' }}>
                <Menu>
                    <MenuTrigger>
                        <Button>{t('Change Language')}</Button>
                    </MenuTrigger>
                    <MenuOptions>
                        <MenuOption
                            onSelect={() => {
                                i18n.changeLanguage('en');
                            }}
                            text="English"
                        />
                        <MenuOption
                            onSelect={() => {
                                i18n.changeLanguage('es');
                            }}
                            text="Spanish"
                        />
                        <MenuOption
                            onSelect={() => {
                                i18n.changeLanguage('de');
                            }}
                            text="Dutch"
                        />
                    </MenuOptions>
                </Menu>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <TouchableHighlight
                    onPress={() => {
                        loginWithGoogle();
                    }}>
                    <Image source={images.social.google} />
                </TouchableHighlight>
                <TouchableHighlight>
                    <Image source={images.social.facebook} />
                </TouchableHighlight>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default Login;
