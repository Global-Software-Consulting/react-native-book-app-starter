import images from 'config/images';
import { IAppState } from 'models/reducers/appReducers';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import LinearGradient from 'react-native-linear-gradient';
import { useOrientation } from 'utils/dimentionUtil';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
    ActivityIndicator,
    Image,
    ScrollView,
    TextInput,
    View,
    TouchableOpacity,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from 'react-native-paper';
import { Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from 'screens/Signup/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as appActions from 'store/actions/appActions';
import * as loginActions from 'store/actions/loginActions';
import { ISignupData } from './types';
import { useTranslation } from 'react-i18next';
import i18n from 'config/Languages/i18n';
import { useWindowDimensions } from 'react-native';
const initI18n = i18n;

const Signup: React.FC = () => {
    const dispatch = useDispatch();
    //defining states
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();
    const SCREEN_WIDTH = useWindowDimensions().width;
    const SCREEN_HEIGHT = useWindowDimensions().height;
    const { width: widthPercentageToDP, height: heightPercentageToDP } = useOrientation();

    const orientation = useOrientation();

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

    return (
        <KeyboardAwareScrollView style={{ flex: 1 }}>
            <LinearGradient
                colors={['#00416A', '#E4E5E6']}
                start={{ x: 0.0, y: 0.5 }}
                end={{ x: 0.1, y: 3.0 }}
                locations={[0, 0.5, 0.6]}
                style={{
                    height: hp('15%'),
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: widthPercentageToDP('100%'),
                }}></LinearGradient>
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
                    {t('Sign up')}
                </Text>

                <View style={styles.infoView}>
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
                                style={styles.inputField}
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

                <View style={styles.infoView}>
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
                                style={styles.inputField}
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

                <View style={styles.infoView}>
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
                                style={styles.inputField}
                                value={value}
                                onChangeText={(text) => onChange(text)}
                            />
                        )}
                        name="email"
                        defaultValue=""
                    />
                    {errors.email && <Text style={{ color: 'red' }}>{t('Email is required')}</Text>}
                </View>

                <View style={styles.infoView}>
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
                                style={styles.inputField}
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
                                width: widthPercentageToDP('80%'),
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

                <View style={styles.editView}>
                    <Button
                        onPress={handleSubmit(onSubmit)}
                        style={{ height: 40, width: widthPercentageToDP('60%'), marginTop: 5 }}>
                        <Text style={{ color: 'white' }}>{t('Sign up')}</Text>
                    </Button>

                    {isLoading && (
                        <ActivityIndicator
                            style={{
                                position: 'absolute',
                                marginLeft: widthPercentageToDP('30%'),
                            }}
                        />
                    )}
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default Signup;
