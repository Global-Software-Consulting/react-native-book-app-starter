import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Image,
  TextInput,
} from 'react-native';
import images from './../../config/images';
import {Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import * as loginActions from './../../store/actions/loginActions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {ILoginState} from 'models/reducers/login';
import AddAnnotation, * as loginReq from './../../services/loginUser';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/core';
import {useTranslation} from 'react-i18next';
import i18n from '../../components/Languages/i18n';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native-gesture-handler';
import {add} from 'react-native-reanimated';
const initI18n = i18n;
interface IState {
  loginReducer: ILoginState;
}

const Login: React.FC = () => {
  const {t, i18n} = useTranslation();
  const id = useSelector((state: IState) => state.loginReducer.id);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  const [email, setEmail] = useState('fsdf');
  const [password, setPassword] = useState('fds');
  const [secure, setSecure] = useState(true);
  const [showActivityIndicator, setShowActivityIndicator] = useState(false);
  const isLoggingIn = useSelector(state => state.loadingReducer.isLoginLoading);
  const [error, setError] = useState('');

  const performLoginOperation = async () => {
    if (email != '' && password != '') {
      setError('');
      setShowActivityIndicator(isLoggingIn);
      dispatch(loginActions.requestLogin({email, password}));

      // AddAnnotation(email, password).then(async () => {
      // });
    } else {
      setError('Email or Password missing');
    }
  };

  return (
    <KeyboardAwareScrollView style={{backgroundColor: 'white'}}>
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

      <TextInput
        autoCorrect={false}
        placeholder="Email"
        placeholderTextColor="black"
        onChangeText={keyword => setEmail(keyword)}
        style={{
          width: widthPercentageToDP('80%'),
          height: heightPercentageToDP('5%'),
          padding: 5,
          alignSelf: 'center',
          borderWidth: 1,
          borderRadius: 20,
          marginTop: 10,
          backgroundColor: 'white',
        }}
      />

      <View
        style={{
          marginBottom: 20,
          flexDirection: 'row',
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 30,
          justifyContent: 'space-between',
          alignItems: 'center',
          width: widthPercentageToDP('80%'),
          height: heightPercentageToDP('5%'),
          marginTop: 5,
          alignSelf: 'center',
        }}>
        <TextInput
          autoCorrect={false}
          placeholder="Password"
          onChangeText={keyword => setPassword(keyword)}
          placeholderTextColor="black"
          secureTextEntry={secure}
          style={{
            padding: 5,
            alignSelf: 'center',
            borderRadius: 20,
            margin: 5,
            backgroundColor: 'white',
            width: widthPercentageToDP('60%'),
          }}
        />
        <Icon
          name="remove-red-eye"
          size={30}
          style={{margin: 6}}
          onPress={() => setSecure(!secure)}
        />
      </View>

      <TouchableHighlight
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
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
          onPress={performLoginOperation}
          disabled={showActivityIndicator}
          style={{
            height: heightPercentageToDP('5 %'),
            width: widthPercentageToDP('60%'),
            marginTop: 5,
          }}>
          <Text style={{color: 'white'}}>Log in</Text>
        </Button>
        {showActivityIndicator && (
          <ActivityIndicator color="white" style={{margin: 5}} />
        )}
      </View>

      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 5}}>
        <Text>Do not have an account? </Text>
        <Text
          style={{color: '#db7093'}}
          onPress={() => navigation.navigate('Signup')}>
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
          }}>
          {error}
        </Text>
      }
    </KeyboardAwareScrollView>
  );
};

export default Login;
