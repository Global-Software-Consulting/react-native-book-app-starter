import { useNavigation } from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';
import { reducerState } from 'models/reducers/index';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useOrientation } from 'utils/dimentionUtil';
import {
    ActivityIndicator,
    Image,
    Text,
    TextInput,
    useWindowDimensions,
    View,
    TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import socialLogin from 'utils/socialLogin';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import images from './../../config/images';
import * as loginActions from './../../store/actions/loginActions';
import { ILoginData } from './types';
import { useTranslation } from 'react-i18next';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
GoogleSignin.configure();
const Login: React.FC = () => {
    const dispatch = useDispatch();
    const SCREEN_WIDTH = useWindowDimensions().width;
    const SCREEN_HEIGHT = useWindowDimensions().height;
    const navigation = useNavigation();
    const { t, i18n } = useTranslation();
    const [secure, setSecure] = useState(true);
    const { width: widthPercentageToDP, height: heightPercentageToDP } = useOrientation();
    const [showActivityIndicator, setShowActivityIndicator] = useState(false);
    const isLoading = useSelector((state: reducerState) => state.loadingReducer.isLoading);
    const message = useSelector((state: reducerState) => state.snackbarReducer.snackbarMessage);
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
        console.log('called');
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            const x = JSON.stringify(userInfo);
            console.log(x);
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
        <KeyboardAwareScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <LinearGradient
                colors={['#00416A', '#E4E5E6']}
                start={{ x: 0.0, y: 0.5 }}
                end={{ x: 0.1, y: 3.0 }}
                locations={[0, 0.5, 0.6]}
                style={{
                    height: hp('25%'),
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: widthPercentageToDP('100%'),
                }}>
                <Text style={{ color: '#FAF9F6', fontSize: 30 }}>Welcome</Text>
                <Text
                    style={{
                        color: '#FAF9F6',
                        fontSize: 15,
                        maxWidth: widthPercentageToDP('85%'),
                    }}>
                    Book app aims to provide variety with a quick sharing of resources among friends
                    and family.
                </Text>
            </LinearGradient>
            <View
                style={{
                    backgroundColor: 'white',
                    width: widthPercentageToDP('90%'),
                    zIndex: 5,
                    borderRadius: 20,
                    marginTop: -30,
                    alignSelf: 'center',
                    justifyContent: 'center',
                }}>
                <Image
                    source={images.app.logo}
                    style={{ alignSelf: 'center', position: 'relative' }}
                />

                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: '500',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        marginTop: 20,
                        color: '#3A3B3C',
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
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 40,
                        alignContent: 'center',
                    }}>
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
                        name="email"
                        defaultValue=""
                    />
                    {errors.email && (
                        <Text style={{ alignSelf: 'center', color: 'red' }}>
                            {t('Email is required')}
                        </Text>
                    )}

                    <View
                        style={{
                            flexDirection: 'row',
                            borderColor: 'black',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: widthPercentageToDP('62%'),
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
                            name={secure ? 'eye-slash' : 'eye'}
                            size={22}
                            style={{ position: 'absolute', marginLeft: '85%' }}
                            onPress={() => setSecure(!secure)}
                        />
                    </View>
                    {errors.password && (
                        <Text style={{ alignSelf: 'center', color: 'red' }}>
                            {t('Password is required')}
                        </Text>
                    )}
                </View>

                <TouchableOpacity
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
                            color: '#00416A',
                            justifyContent: 'center',
                        }}
                        onPress={() => navigation.navigate('ForgotPassword')}>
                        {t('Forgot Password')}
                    </Text>
                </TouchableOpacity>

                <View
                    style={{
                        backgroundColor: '#00416A',
                        alignContent: 'center',
                        alignSelf: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        marginTop: 30,
                        borderRadius: 20,
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
                    {isLoading && (
                        <ActivityIndicator
                            color="white"
                            style={{
                                marginLeft: widthPercentageToDP('50%'),
                                alignSelf: 'center',
                                position: 'absolute',
                            }}
                        />
                    )}
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: 5,
                    }}>
                    <Text>{t('Do not have an account?')} </Text>
                    <Text
                        style={{ color: '#00416A' }}
                        onPress={() => navigation.navigate('Signup')}>
                        {t('Sign up')}
                    </Text>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 30,
                    }}>
                    <TouchableOpacity
                        onPress={() => {
                            loginWithGoogle();
                        }}>
                        <Image source={images.social.google} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={images.social.facebook} />
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        margin: 5,
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                    }}>
                    <Menu>
                        <MenuTrigger>
                            <Image source={images.app.language} />
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
            </View>
        </KeyboardAwareScrollView>
    );
};

export default Login;
