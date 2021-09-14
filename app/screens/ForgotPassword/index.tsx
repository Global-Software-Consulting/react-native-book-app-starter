import images from 'config/images';
import React, {useState} from 'react';
import {Button, Image, TextInput, View} from 'react-native';
import {Text} from 'react-native-paper';
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
const initI18n = i18n;
const forgotPassword: React.FC = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());
  //defining states
  const [email, setEmail] = useState('');

  const {t, i18n} = useTranslation();
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>{t('Forgot Password')}</Text>

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
          onPress={() => {}}
          title="Submit"
          style={styles.editButton}></Button>
      </View>
    </View>
  );
};

export default forgotPassword;
