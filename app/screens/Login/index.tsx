import { useNavigation } from '@react-navigation/core';
import { IAppState } from 'models/reducers/appReducers';
import { ILoading } from 'models/reducers/loading';
import { ILoginState } from 'models/reducers/login';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ActivityIndicator, Image, Text, TextInput, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from 'react-native-paper';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import images from './../../config/images';
import * as loginActions from './../../store/actions/loginActions';
import * as snackbarActions from './../../store/actions/snackbarActions';
import { IStateReducer } from 'models/reducers/index';

interface ILoginData {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [secure, setSecure] = useState(true);
    const [showActivityIndicator, setShowActivityIndicator] = useState(false);
    const isSnackbarVisible = useSelector(
        (state: IStateReducer) => state.snackbarReducer.snackbarVisible,
    );
    const isLoading = useSelector((state: IStateReducer) => state.loadingReducer.isLoading);
    const message = useSelector((state: IStateReducer) => state.snackbarReducer.snackbarMessage);
    const [error, setError] = useState(message);
    const loginResponse = useSelector(
        (state: IStateReducer) => state.loginReducer.loginResponse.status,
    );
    //form data
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const performLoginOperation = async (data: ILoginData) => {
        setShowActivityIndicator(isLoading);
        dispatch(loginActions.requestLogin(data));
    };

    const onSubmit = (data: ILoginData) => {
        performLoginOperation(data);
    };

    return (
        <KeyboardAwareScrollView style={{ backgroundColor: 'white' }}>
            <Image
                source={images.app.logo}
                style={{
                    alignSelf: 'center',
                    marginTop: 20,
                    width: widthPercentageToDP('40%'),
                    height: heightPercentageToDP('30%'),
                }}
            />
            <Text
                style={{
                    fontSize: 30,
                    fontWeight: '500',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    marginTop: 20,
                }}>
                Log In Now
            </Text>
            <Text
                style={{
                    fontSize: 15,
                    fontWeight: '300',
                    color: 'grey',
                    alignSelf: 'center',
                }}>
                Please login to continue using our app
            </Text>

            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        placeholder="Enter your email address"
                        autoCapitalize="none"
                        textContentType="emailAddress"
                        keyboardType="email-address"
                        autoCorrect={false}
                        style={{
                            width: widthPercentageToDP('80%'),
                            height: 50,
                            padding: 5,
                            alignSelf: 'center',
                            borderWidth: 1,
                            borderRadius: 20,
                            marginTop: 10,
                            backgroundColor: 'white',
                        }}
                        value={value}
                        onChangeText={(text) => onChange(text)}
                    />
                )}
                name="email"
                defaultValue=""
            />
            {errors.email && <Text style={{ alignSelf: 'center' }}>Email is required</Text>}

            <View
                style={{
                    flexDirection: 'row',
                    borderColor: 'black',
                    borderWidth: 1,
                    borderRadius: 30,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: widthPercentageToDP('80%'),
                    height: 50,
                    marginTop: 5,
                    alignSelf: 'center',
                }}>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            placeholder="Enter your password"
                            autoCapitalize="none"
                            secureTextEntry={secure}
                            autoCorrect={false}
                            style={{
                                padding: 5,
                                alignSelf: 'center',
                                borderRadius: 20,
                                margin: 5,
                                backgroundColor: 'white',
                                width: widthPercentageToDP('60%'),
                            }}
                            value={value}
                            onChangeText={(text) => onChange(text)}
                        />
                    )}
                    name="password"
                    defaultValue=""
                />

                <Icon
                    name="remove-red-eye"
                    size={30}
                    style={{ margin: 6 }}
                    onPress={() => setSecure(!secure)}
                />
            </View>
            {errors.password && <Text style={{ alignSelf: 'center' }}>Password is required</Text>}

            <TouchableHighlight
                style={{
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                }}
                underlayColor="transparent"
                onPress={() => navigation.navigate('ForgotPassword')}>
                <Text
                    style={{
                        alignSelf: 'flex-end',
                        marginRight: 20,
                        color: 'black',
                        justifyContent: 'center',
                    }}
                    onPress={() => navigation.navigate('ForgotPassword')}>
                    Forgot Password
                </Text>
            </TouchableHighlight>

            <View
                style={{
                    backgroundColor: '#491484',
                    alignContent: 'center',
                    alignSelf: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    marginTop: 15,
                }}>
                <Button
                    onPress={handleSubmit(onSubmit)}
                    disabled={showActivityIndicator}
                    style={{
                        height: 40,
                        width: widthPercentageToDP('60%'),
                        marginTop: 5,
                    }}>
                    <Text style={{ color: 'white' }}>Log in</Text>
                </Button>
                {isLoading && <ActivityIndicator color="white" style={{ margin: 5 }} />}
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 5 }}>
                <Text>Do not have an account? </Text>
                <Text style={{ color: '#db7093' }} onPress={() => navigation.navigate('Signup')}>
                    Sign up
                </Text>
            </View>

            {
                <Text
                    style={{
                        alignSelf: 'center',
                        marginTop: 5,
                        marginBottom: 5,
                        color: 'red',
                    }}></Text>
            }
        </KeyboardAwareScrollView>
    );
};

export default Login;
