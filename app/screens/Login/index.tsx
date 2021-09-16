import {useNavigation} from '@react-navigation/core';
import {IBookState} from 'models/reducers/fetchBooks';
import {ILoading} from 'models/reducers/loading';
import {ILoginState} from 'models/reducers/login';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {ActivityIndicator, Image, Text, TextInput, View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button} from 'react-native-paper';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Toast from 'react-native-simple-toast';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import NetworkUtils from 'utils/networkUtils';
import i18n from '../../components/Languages/i18n';
import images from './../../config/images';
import * as loginActions from './../../store/actions/loginActions';
const initI18n = i18n;

interface IState {
  loginReducer: ILoginState;
  appReducer: IBookState;
  loadingReducer: ILoading;
}

const Login: React.FC = () => {
  const {t, i18n} = useTranslation();
  const id = useSelector((state: IState) => state.loginReducer.id);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const [showActivityIndicator, setShowActivityIndicator] = useState(false);
  const isLoading = useSelector(
    (state: IState) => state.loadingReducer.isLoginLoading,
  );
  const [error, setError] = useState('');
  const loginResponse = useSelector(
    (state: IState) => state.loginReducer.loginResponse.status,
  );

  const performLoginOperation = async () => {
    const isConnected = await NetworkUtils.isNetworkAvailable();
    if (isConnected) {
      if (email != '' && password != '') {
        setError('');
        setShowActivityIndicator(isLoading);
        dispatch(loginActions.requestLogin({email, password}));
        if (loginResponse == 'error') {
          setError('No user found');
          dispatch(loginActions.IClearLoginResponse());
        } else {
          setError('Authenticated Successfully');
        }
      } else {
        setError('Email or Password missing');
      }
    } else {
      Toast.show('You are offline', Toast.SHORT);
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
          height: 50,
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
          height: 50,
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
          onPress={performLoginOperation}
          disabled={showActivityIndicator}
          style={{
            height: 40,
            width: widthPercentageToDP('60%'),
            marginTop: 5,
          }}>
          <Text style={{color: 'white'}}>Log in</Text>
        </Button>
        {isLoading && <ActivityIndicator color="white" style={{margin: 5}} />}
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
