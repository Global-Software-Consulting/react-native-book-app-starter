import i18n from 'components/Languages/i18n';
import images from 'config/images';
import { IBookState } from 'models/reducers/fetchBooks';
import { ILoading } from 'models/reducers/loading';
import { ILoginState } from 'models/reducers/login';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, Button, Image, TextInput, View } from 'react-native';
import { Text } from 'react-native-paper';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Toast from 'react-native-simple-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from 'screens/ForgotPassword/styles';
import * as loginActions from 'store/actions/loginActions';

interface IAppReducer {
    loginReducer: ILoginState;
    appReducer: IBookState;
    loadingReducer: ILoading;
}

const initI18n = i18n;
const forgotPassword: React.FC = () => {
    const dispatch = useDispatch();
    //fetching data from store
    const isLoading = useSelector((state: IAppReducer) => state.loadingReducer.isLoginLoading);
    const forgetpasswordResponse = useSelector(
        (state: IAppReducer) => state.loginReducer.forgetPasswordResponse,
    );
    //defining states
    const [email, setEmail] = useState('');
    const [isShowing, setIsShowing] = useState(false);
    const { t, i18n } = useTranslation();
    const styles = useStyles();

    const sendResetLink = () => {
        if (email == '') {
            Toast.show('Enter email address');
        } else {
            dispatch(loginActions.IForgotPasswordRequest(email));
            setIsShowing(true);
            setTimeout(() => {
                setIsShowing(false);
            }, 2000);
        }
    };

    return (
        <View style={styles.container}>
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
                    <Text style={styles.subHeading}>Email: </Text>
                    <TextInput style={styles.inputField} onChangeText={(text) => setEmail(text)} />
                </View>
            </View>

            <View style={styles.editView}>
                <Button
                    onPress={() => {
                        sendResetLink();
                    }}
                    title="Submit"
                />
                {isLoading && <ActivityIndicator />}
            </View>
            {forgetpasswordResponse && isShowing ? (
                <View>
                    <Text style={{ color: 'blue' }}>Message: {forgetpasswordResponse.message}</Text>
                </View>
            ) : (
                <View />
            )}
        </View>
    );
};

export default forgotPassword;
