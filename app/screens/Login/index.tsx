import AsyncStorage from '@react-native-async-storage/async-storage';
import {ILoginState} from 'models/reducers/login';
import NavigationService from 'navigation/NavigationService';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  ActivityIndicator,
  Alert,
  Image,
  Text,
  TextInput,
  View,
} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button} from 'react-native-paper';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import i18n from '../../config/Languages/index';
import images from './../../config/images';
import AddAnnotation from './../../services/loginUser';
import * as loginActions from './../../store/actions/loginActions';
import styles from './styles';
const initI18n = i18n;
interface IState {
  loginReducer: ILoginState;
}

const Login: React.FC = () => {
  const {t, i18n} = useTranslation();
  const id = useSelector((state: IState) => state.loginReducer.id);
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  const [email, setEmail] = useState('fsdf');
  const [password, setPassword] = useState('fds');
  const [secure, setSecure] = useState(true);
  const [showActivityIndicator, setShowActivityIndicator] = useState(false);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        dispatch(loginActions.userDetailsRequest(value));
        dispatch(loginActions.setLoggedIn());
      } else {
        Alert.alert('Book App', 'Please check your email and password');
      }
    } catch (e) {
      Alert.alert('Book App', 'Error fetching data');
    }
  };

  const performLoginOperation = () => {
    setShowActivityIndicator(true);
    AddAnnotation(email, password).then(() => {
      getData();
      setShowActivityIndicator(false);
    });
  };

  return (
    <KeyboardAwareScrollView style={{backgroundColor: 'white'}}>
      <Image source={images.app.logo} style={styles.logo} />
      <Text style={styles.heading}>Log In Now</Text>
      <Text style={styles.guidingline}>
        Please login to continue using our app
      </Text>

      <TextInput
        autoCorrect={false}
        placeholder="Email"
        placeholderTextColor="black"
        onChangeText={keyword => setEmail(keyword)}
        style={styles.emailText}
      />

      <View style={styles.passwordView}>
        <TextInput
          autoCorrect={false}
          placeholder="Password"
          onChangeText={keyword => setPassword(keyword)}
          placeholderTextColor="black"
          secureTextEntry={secure}
          style={styles.passwordText}
        />
        <Icon
          name="remove-red-eye"
          size={30}
          style={styles.iconEye}
          onPress={() => setSecure(!secure)}
        />
      </View>

      <TouchableHighlight style={styles.touchableHighlight}>
        <Text style={styles.forgotPasswordText}>Forgot Password</Text>
      </TouchableHighlight>

      <View style={styles.loginView}>
        <Button
          onPress={performLoginOperation}
          disabled={showActivityIndicator}
          style={styles.loginButton}>
          <Text style={styles.loginText}>Log in</Text>
        </Button>
        {showActivityIndicator && (
          <ActivityIndicator color="white" style={styles.activityIndicator} />
        )}
      </View>

      <View style={styles.textMessage}>
        <Text>Do not have an account? </Text>
        <Text style={styles.signupText}>Sign up</Text>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
