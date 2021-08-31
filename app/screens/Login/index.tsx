import React from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

import * as loginActions from 'store/actions/loginActions';
import styles from './styles';
import {ILoginState} from 'models/reducers/login';
import NavigationService from 'navigation/NavigationService';
import {useTranslation} from 'react-i18next';

import i18n from "../../components/Languages/i18n";
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
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.login}> {t('Login Status')} : {id}</Text>
        <Button icon="login" mode="outlined" onPress={onLogin}>
        {t('Login')}
        </Button>
        <Button
          mode="text"
          style={styles.forgot}
          labelStyle={styles.labelStyle}
          onPress={onForgot}>
         {t('Forgot Password')}
        </Button>
      </View>
    </View>
  );
};

export default Login;
