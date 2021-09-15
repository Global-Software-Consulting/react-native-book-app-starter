import images from 'config/images';
import React, {useState} from 'react';
import {ActivityIndicator, Button, Image, TextInput, View} from 'react-native';
import {Text} from 'react-native-paper';
import Toast from 'react-native-simple-toast';

import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import {useDispatch, useSelector} from 'react-redux';
import {useStyles} from 'screens/ForgotPassword/styles';
import i18n from 'components/Languages/i18n';

import {useTranslation} from 'react-i18next';
import * as loginActions from 'store/actions/loginActions';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
const initI18n = i18n;
const forgotPassword: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.loadingReducer.isLoginLoading);

  const forgetpasswordResponse = useSelector(
    state => state.loginReducer.forgetPasswordResponse,
  );
  //defining states
  const [email, setEmail] = useState('');

  const {t, i18n} = useTranslation();
  const styles = useStyles();

  const sendResetLink = () => {
    if (email == '') {
      Toast.show('Enter email address');
    } else {
      dispatch(loginActions.IForgotPasswordRequest(email));
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
          <TextInput
            style={styles.inputField}
            onChangeText={text => setEmail(text)}
          />
        </View>
      </View>

      <View style={styles.editView}>
        <Button
          onPress={() => {
            sendResetLink();
          }}
          title="Submit"
          style={styles.editButton}></Button>
        {isLoading && <ActivityIndicator />}
      </View>
      {forgetpasswordResponse ? (
        <View>
          <Text style={{color: 'blue'}}>
            Message: {forgetpasswordResponse.message}
          </Text>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default forgotPassword;
