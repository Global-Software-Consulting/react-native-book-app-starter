import images from 'config/images';
import { IBookState } from 'models/reducers/fetchBooks';
import { ILoading } from 'models/reducers/loading';
import { ILoginState } from 'models/reducers/login';
import React, { useState } from 'react';
import { ActivityIndicator, Button, Image, TextInput, View } from 'react-native';
import { Text } from 'react-native-paper';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Toast from 'react-native-simple-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from 'screens/ForgotPassword/styles';
import forgotPassword from 'services/forgotPassword';
import * as loginActions from 'store/actions/loginActions';

interface IAppReducer {
    loginReducer: ILoginState;
    appReducer: IBookState;
    loadingReducer: ILoading;
}

const ForgotPassword: React.FC = () => {
    //defining states
    const [email, setEmail] = useState('');
    // const dispatch = useDispatch();
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
                    console.log('Y>', response);
                    setForgetPasswordResponse(response);
                    setIsLoading(false);
                });
                setIsShowing(true);
                setTimeout(() => {
                    setIsShowing(false);
                }, 2000);
            } catch {
                Toast.show('Error occurred, please try again', Toast.SHORT);
            }
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

export default ForgotPassword;
