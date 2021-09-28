import images from 'config/images';
import { IAppState } from 'models/reducers/appReducers';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, Dimensions, Image, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import { Button, Text, useTheme } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from 'screens/Signup/styles';
import * as appActions from 'store/actions/appActions';
import * as loginActions from 'store/actions/loginActions';
import { ISignupData } from './types';

const Signup: React.FC = () => {
    const dispatch = useDispatch();
    //defining states
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();
    const theme = useTheme();

    const isLoading = useSelector(
        (state: { loadingReducer: IAppState }) => state.loadingReducer.isLoading,
    );
    const gender = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
    ];
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const performSignUp = async (data: ISignupData) => {
        dispatch(loginActions.signupRequest(data));
        dispatch(appActions.getFavoriteBookRequest());
    };

    const onSubmit = (data: ISignupData) => {
        performSignUp(data);
    };

    const styles = useStyles();
    const window = Dimensions.get('window');
    const screen = Dimensions.get('screen');
    const [dimensions, setDimensions] = useState({ window, screen });
    useEffect(() => {
        const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
            setDimensions({ window, screen });
        });
        return () => subscription?.remove();
    });

    return (
        <KeyboardAwareScrollView style={{ flex: 1 }}>
            <LinearGradient
                colors={['#00416A', '#E4E5E6']}
                start={{ x: 0.0, y: 0.5 }}
                end={{ x: 0.1, y: 3.0 }}
                locations={[0, 0.5, 0.6]}
                style={{
                    height: dimensions.window.height * 0.15,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: dimensions.window.width,
                }}
            />
            <View
                style={{
                    backgroundColor: 'white',
                    width: dimensions.window.width * 0.9,
                    zIndex: 5,
                    borderRadius: 20,
                    marginTop: -30,
                    alignSelf: 'center',
                    justifyContent: 'center',
                }}>
                <Image source={images.app.logo} style={styles.img} />
                <Text style={styles.signUpText}>{t('Sign up')}</Text>

                <View
                    style={{
                        marginBottom: 10,
                        borderColor: theme.colors.text,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: dimensions.window.width * 0.8,
                        height: 50,
                    }}>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                placeholder={t('Enter your first name')}
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={{ width: dimensions.window.width * 0.5, height: 40 }}
                                value={value}
                                onChangeText={(text) => onChange(text)}
                            />
                        )}
                        name="firstName"
                        defaultValue=""
                    />
                    {errors.firstName && (
                        <Text style={{ color: 'red' }}>{t('First name is required')}</Text>
                    )}
                </View>

                <View
                    style={{
                        marginBottom: 10,
                        borderColor: theme.colors.text,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: dimensions.window.width * 0.8,
                        height: 50,
                    }}>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                placeholder={t('Enter your last name')}
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={{ width: dimensions.window.width * 0.5, height: 40 }}
                                value={value}
                                onChangeText={(text) => onChange(text)}
                            />
                        )}
                        name="lastName"
                        defaultValue=""
                    />
                    {errors.lastName && (
                        <Text style={{ color: 'red' }}>{t('Last name is required')}</Text>
                    )}
                </View>

                <View
                    style={{
                        marginBottom: 10,
                        borderColor: theme.colors.text,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: dimensions.window.width * 0.8,
                        height: 50,
                    }}>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                placeholder={t('Enter your email')}
                                autoCapitalize="none"
                                textContentType="emailAddress"
                                keyboardType="email-address"
                                autoCorrect={false}
                                style={{ width: dimensions.window.width * 0.5, height: 40 }}
                                value={value}
                                onChangeText={(text) => onChange(text)}
                            />
                        )}
                        name="email"
                        defaultValue=""
                    />
                    {errors.email && <Text style={{ color: 'red' }}>{t('Email is required')}</Text>}
                </View>

                <View
                    style={{
                        marginBottom: 10,
                        borderColor: theme.colors.text,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: dimensions.window.width * 0.8,
                        height: 50,
                    }}>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                placeholder={t('Enter password')}
                                secureTextEntry={true}
                                autoCapitalize="none"
                                autoCorrect={false}
                                style={{ width: dimensions.window.width * 0.5, height: 40 }}
                                value={value}
                                onChangeText={(text) => onChange(text)}
                            />
                        )}
                        name="password"
                        defaultValue=""
                    />
                    {errors.lastName && (
                        <Text style={{ color: 'red' }}>{t('Password is required')}</Text>
                    )}
                </View>

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, value } }) => (
                        <DropDownPicker
                            placeholder={t('Please select gender')}
                            open={open}
                            value={value}
                            items={gender}
                            setOpen={setOpen}
                            setValue={onChange}
                            style={{
                                width: dimensions.window.width * 0.8,
                                alignSelf: 'center',
                                borderRadius: 20,
                                marginTop: 10,
                            }}
                            dropDownContainerStyle={styles.dropDown}
                        />
                    )}
                    name="gender"
                    defaultValue=""
                />
                {errors.value && <Text style={{ color: 'red' }}>{t('Please provide gender')}</Text>}

                <View style={styles.submitView}>
                    <Button
                        onPress={handleSubmit(onSubmit)}
                        disabled={isLoading}
                        style={styles.submit}>
                        <Text style={{ color: 'white' }}>{t('Sign up')}</Text>
                    </Button>
                    {isLoading && <ActivityIndicator color="white" style={styles.activity} />}
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default Signup;
