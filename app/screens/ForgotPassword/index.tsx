import images from 'config/images';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, Image, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-paper';
import Toast from 'react-native-simple-toast';
import { useDispatch } from 'react-redux';
import { useStyles } from 'screens/ForgotPassword/styles';
import forgotPassword from 'services/forgotPassword';
import * as snackbarActions from 'store/actions/snackbarActions';
const ForgotPassword: React.FC = () => {
    //defining states
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const styles = useStyles();
    const { t } = useTranslation();

    //fetching data from store
    const [isLoading, setIsLoading] = useState<boolean>();

    const validate = (text: string) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        return reg.test(text);
    };

    const sendResetLink = () => {
        if (email === '') {
            Toast.show('Enter email address');
        } else {
            if (validate(email)) {
                // dispatch(loginActions.IForgotPasswordRequest(email));
                try {
                    setIsLoading(true);
                    forgotPassword(email).then((response) => {
                        dispatch(snackbarActions.enableSnackbar(response.message));
                        setIsLoading(false);
                    });
                    setTimeout(() => {
                        dispatch(snackbarActions.disableSnackbar());
                    }, 4000);
                } catch {
                    setIsLoading(false);
                    dispatch(snackbarActions.enableSnackbar('Operation failed, please try again'));
                }
            } else {
                Toast.show('Incorrect email format');
            }
        }
    };

    return (
        <KeyboardAwareScrollView style={{ flex: 1 }}>
            <LinearGradient
                colors={['#00416A', '#00416A', '#E4E5E6']}
                start={{ x: 0.0, y: 0.5 }}
                end={{ x: 0.1, y: 3.0 }}
                locations={[0, 0.5, 0.6]}
                style={styles.linearGradient}
            />
            <View style={styles.cardView}>
                <Image
                    source={images.app.logo}
                    style={{ alignSelf: 'center', position: 'relative' }}
                />
                <Text style={styles.headingText}>{t('Forgot Password')}</Text>
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
                    <Button onPress={sendResetLink} style={styles.button}>
                        <Text style={{ color: 'white' }}>{t('Submit')}</Text>
                    </Button>

                    {isLoading && <ActivityIndicator style={styles.activityIndicator} />}
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default ForgotPassword;
