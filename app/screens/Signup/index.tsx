import images from 'config/images';
import { IAppState } from 'models/reducers/appReducers';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ActivityIndicator, Button, Image, ScrollView, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Text } from 'react-native-paper';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from 'screens/Signup/styles';
import * as appActions from 'store/actions/appActions';
import * as loginActions from 'store/actions/loginActions';
import { ISignupData } from './types';
import { useTranslation } from 'react-i18next';
import i18n from 'config/Languages/i18n';
const initI18n = i18n;

const Signup: React.FC = () => {
    const dispatch = useDispatch();
    //defining states
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();
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
        <KeyboardAwareScrollView style={{ backgroundColor: 'white' }}>
            <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}>
                <Image
                    source={images.app.logo}
                    style={{
                        alignSelf: 'center',
                        marginTop: 20,
                        width: widthPercentageToDP('40%'),
                        height: heightPercentageToDP('30%'),
                    }}
                />
                <Text style={styles.mainHeading}>{t('Fill in the sign up form')}</Text>
                <View>
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
                        {errors.firstName && <Text>{t('First name is required')}</Text>}
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
                        {errors.lastName && <Text>{t('Last name is required')}</Text>}
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
                        {errors.email && <Text>{t('Email is required')}</Text>}
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
                        {errors.lastName && <Text>{t('Password is required')}</Text>}
                    </View>
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
                            style={styles.dropDown}
                            dropDownContainerStyle={styles.dropDown}
                        />
                    )}
                    name="gender"
                    defaultValue=""
                />
                {errors.value && <Text>{t('Please provide gender')}</Text>}

                <View style={styles.editView}>
                    <Button onPress={handleSubmit(onSubmit)} title={t('Sign up')} />
                    {isLoading && <ActivityIndicator />}
                </View>
            </ScrollView>
        </KeyboardAwareScrollView>
    );
};

export default Signup;
