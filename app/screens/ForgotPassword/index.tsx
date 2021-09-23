import images from 'config/images';
import { IAppState } from 'models/reducers/appReducers';
import { ILoading } from 'models/reducers/loading';
import { ILoginState } from 'models/reducers/login';
import React, { useState } from 'react';
import { ActivityIndicator, Button, Image, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Text } from 'react-native-paper';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Toast from 'react-native-simple-toast';
import { useDispatch } from 'react-redux';
import { useStyles } from 'screens/ForgotPassword/styles';
import forgotPassword from 'services/forgotPassword';
import * as snackbarActions from 'store/actions/snackbarActions';
import { IStateReducer } from 'models/reducers/index';
import { useTranslation } from 'react-i18next';
import i18n from 'config/Languages/i18n';
const initI18n = i18n;

const ForgotPassword: React.FC = () => {
    //defining states
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const [isShowing, setIsShowing] = useState(false);
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
        <View style={styles.container}>
            <KeyboardAwareScrollView style={{ flex: 1 }}>
                <Image
                    source={images.app.logo}
                    style={{
                        marginTop: 30,
                        alignSelf: 'center',
                        width: widthPercentageToDP('40%'),
                        height: heightPercentageToDP('30%'),
                    }}
                />

                <View>
                    <View style={styles.infoView}>
                        <TextInput
                            style={styles.inputField}
                            textContentType="emailAddress"
                            keyboardType="email-address"
                            placeholder={t('Enter your email')}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                </View>

                <View style={styles.editView}>
                    <Button
                        onPress={() => {
                            sendResetLink();
                        }}
                        title={t('Submit')}
                    />
                    {isLoading && <ActivityIndicator />}
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
};

export default ForgotPassword;
