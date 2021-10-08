//import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/core';
import { ReducerState } from 'models/reducers/index';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-paper';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { UserData } from 'store/actions/loginActions';
import { getPercentageHeight, getPercentageWidth } from 'utils/dimentionUtil';
import images from './../../config/images';
import * as loginActions from './../../store/actions/loginActions';
import Toast from 'react-native-simple-toast';
import { useStyles } from './styles';
const Login: React.FC = () => {
    const dispatch = useDispatch();
    const height = getPercentageHeight();
    const width = getPercentageWidth();

    const navigation = useNavigation();
    const { t, i18n } = useTranslation();
    const styles = useStyles();
    const [secure, setSecure] = useState<boolean>(true);
    const [showActivityIndicator, setShowActivityIndicator] = useState<boolean>(false);
    const isLoading = useSelector((state: ReducerState) => state.loadingReducer.isLoading);
    //form data

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const validate = (text: string) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        return reg.test(text);
    };

    const performLoginOperation = async (data: UserData) => {
        setShowActivityIndicator(isLoading);
        dispatch(loginActions.requestLogin(data));
    };

    const onSubmit = (data: UserData) => {
        if (validate(data.email)) {
            performLoginOperation(data);
        } else {
            Toast.show('Incorrect email format');
        }
    };

    // const window = Dimensions.get('window');
    // const screen = Dimensions.get('screen');
    // const [dimensions, setDimensions] = useState({ window, screen });

    // const loginWithGoogle = async () => {
    //     console.log('called');
    //     try {
    //         await GoogleSignin.hasPlayServices();
    //         const userInfo = await GoogleSignin.signIn();
    //         const x = JSON.stringify(userInfo);
    //         console.log(x);
    //         console.log('Google response', x);
    //     } catch (error) {
    //         if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //             // user cancelled the login flow
    //         } else if (error.code === statusCodes.IN_PROGRESS) {
    //             // operation (e.g. sign in) is in progress already
    //         } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //             // play services not available or outdated
    //         } else {
    //             // some other error happened
    //         }
    //     }
    // };
    function IconLanguage() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Image source={images.app.language} />
                <Text>{i18n.language}</Text>
            </View>
        );
    }
    return (
        <KeyboardAwareScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <LinearGradient
                colors={['#00416A', '#00416A', '#E4E5E6']}
                start={{ x: 0.0, y: 0.5 }}
                end={{ x: 0.1, y: 3.0 }}
                locations={[0, 0.5, 0.6]}
                style={styles.linearGradient}>
                <Text style={styles.welcomeText}>Welcome</Text>
                <Text style={styles.subHeading}>
                    Book app aims to provide variety with a quick sharing of resources among friends
                    and family.
                </Text>
            </LinearGradient>
            <View style={styles.cardView}>
                <Image source={images.app.logo} style={styles.logo} />

                <Text style={styles.logInText}>{t('Log In Now')}</Text>

                <Text style={styles.subLoginText}>
                    {t('Please login to continue using our app')}
                </Text>
                <View style={styles.miniView}>
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
                                style={styles.emailInput}
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

                    <View style={styles.passwordView}>
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
                                    style={styles.passwordInput}
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
                            style={styles.icon}
                            onPress={() => setSecure(!secure)}
                        />
                    </View>
                    {errors.password && (
                        <Text style={styles.errorMessage}>{t('Password is required')}</Text>
                    )}
                </View>

                <TouchableOpacity
                    style={styles.touchableOpacity}
                    onPress={() => navigation.navigate('ForgotPassword' as never)}>
                    <Text
                        style={styles.link}
                        onPress={() => navigation.navigate('ForgotPassword' as never)}>
                        {t('Forgot Password')}
                    </Text>
                </TouchableOpacity>

                <View style={styles.submitView}>
                    <Button
                        onPress={handleSubmit(onSubmit)}
                        disabled={showActivityIndicator}
                        style={styles.submit}>
                        <Text style={{ color: 'white' }}>{t('Log in')}</Text>
                    </Button>
                    {isLoading && <ActivityIndicator color="white" style={styles.activity} />}
                </View>

                <View style={styles.basicText}>
                    <Text>{t('Do not have an account?')} </Text>
                    <Text
                        style={{ color: '#00416A' }}
                        onPress={() => navigation.navigate('Signup' as never)}>
                        {t('Sign up')}
                    </Text>
                </View>

                <View style={styles.menu}>
                    <Menu>
                        <MenuTrigger>
                            <IconLanguage />
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

export default React.memo(Login);
