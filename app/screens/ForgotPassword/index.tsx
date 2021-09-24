import images from 'config/images';
import i18n from 'config/Languages/i18n';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, Image, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from 'react-native-paper';
import Toast from 'react-native-simple-toast';
import { useDispatch } from 'react-redux';
import { useOrientation } from 'utils/dimentionUtil';

import { useStyles } from 'screens/ForgotPassword/styles';
import forgotPassword from 'services/forgotPassword';
import * as snackbarActions from 'store/actions/snackbarActions';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
const initI18n = i18n;

const ForgotPassword: React.FC = () => {
    //defining states
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const [isShowing, setIsShowing] = useState(false);
    const { width: widthPercentageToDP, height: heightPercentageToDP } = useOrientation();

    const styles = useStyles();
    const { t } = useTranslation();

    //fetching data from store
    const [isLoading, setIsLoading] = useState<boolean>();
    const [forgetpasswordResponse, setForgetPasswordResponse] = useState<object>();

    const sendResetLink = () => {
        if (email === '') {
            Toast.show('Enter email address');
        } else {
            // dispatch(loginActions.IForgotPasswordRequest(email));
            try {
                setIsLoading(true);
                forgotPassword(email).then((response) => {
                    dispatch(snackbarActions.enableSnackbar(response.message));
                    setIsLoading(false);
                });
                setIsShowing(true);
                setTimeout(() => {
                    dispatch(snackbarActions.disableSnackbar());
                }, 4000);
            } catch {
                dispatch(snackbarActions.enableSnackbar('Operation failed, please try again'));
            }
        }
    };

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
                    {t('Forgot Password')}
                </Text>
                <View style={styles.infoView}>
                    <TextInput
                        style={styles.inputField}
                        textContentType="emailAddress"
                        keyboardType="email-address"
                        placeholder={t('Enter your email')}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>

                <View style={styles.editView}>
                    <Button
                        onPress={sendResetLink}
                        style={{ height: 40, width: widthPercentageToDP('60%'), marginTop: 5 }}>
                        <Text style={{ color: 'white' }}>{t('Submit')}</Text>
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

export default ForgotPassword;
