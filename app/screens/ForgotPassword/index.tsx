import images from 'config/images';
import { IBookState } from 'models/reducers/fetchBooks';
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

interface IAppReducer {
    loginReducer: ILoginState;
    appReducer: IBookState;
    loadingReducer: ILoading;
}

const ForgotPassword: React.FC = () => {
    //defining states
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const [isShowing, setIsShowing] = useState(false);
    const styles = useStyles();

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
                        <Text style={styles.subHeading}>Email: </Text>
                        <TextInput
                            style={styles.inputField}
                            textContentType="emailAddress"
                            keyboardType="email-address"
                            onChangeText={(text) => setEmail(text)}
                        />
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
            </KeyboardAwareScrollView>
        </View>
    );
};

export default ForgotPassword;
