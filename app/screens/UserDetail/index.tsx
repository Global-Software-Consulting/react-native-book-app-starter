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
import {useStyles} from 'screens/UserDetail/styles';
import i18n from 'components/Languages/i18n';
import {useTranslation} from 'react-i18next';
import * as loginActions from 'store/actions/loginActions';
const initI18n = i18n;
const UserDetail: React.FC = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());
  const userDetails = useSelector(state => state.loginReducer.userData.result);
  //defining states
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(userDetails.firstName);
  const [lastName, setLastName] = useState(userDetails.lastName);
  const [email, setEmail] = useState(userDetails.email);

  const {t, i18n} = useTranslation();
  const styles = useStyles();
  console.log('usero', userDetails);
  return (
    <View style={styles.container}>
      <Menu>
        <MenuTrigger>
          <Image
            source={images.app.profilePicture}
            style={styles.displayPicture}
          />
        </MenuTrigger>
        <MenuOptions>
          <MenuOption onSelect={() => {}} text="Change" />
          <MenuOption onSelect={() => {}}>
            <Text style={{color: 'red'}}>Delete</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
      <Text style={styles.mainHeading}>{t('Profile Details')}</Text>
      {!isEditing ? (
        <View>
          <View style={styles.infoView}>
            <Text style={styles.subHeading}>{t('First Name')}:</Text>
            <Text> {userDetails.firstName}</Text>
          </View>

          <View style={styles.infoView}>
            <Text style={styles.subHeading}>{t('Last Name')}:</Text>
            <Text> {userDetails.lastName}</Text>
          </View>

          <View style={styles.infoView}>
            <Text style={styles.subHeading}>{t('Email')}:</Text>
            <Text> {userDetails.email}</Text>
          </View>
        </View>
      ) : (
        <View>
          <View style={styles.infoView}>
            <Text style={styles.subHeading}>{t('First Name')}: </Text>
            <TextInput
              style={styles.inputField}
              value={firstName}
              onChangeText={text => setFirstName(text)}
            />
          </View>

          <View style={styles.infoView}>
            <Text style={styles.subHeading}>{t('Last Name')}: </Text>
            <TextInput
              style={styles.inputField}
              value={lastName}
              onChangeText={text => setLastName(text)}
            />
          </View>

          <View style={styles.infoView}>
            <Text style={styles.subHeading}>{t('Email')}: </Text>
            <TextInput
              style={styles.inputField}
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
        </View>
      )}

      <View style={styles.editView}>
        <Button
          onPress={() => {
            setIsEditing(!isEditing);
          }}
          title={!isEditing ? t('Edit') : t('Update')}
          style={styles.editButton}></Button>
      </View>
    </View>
  );
};

export default UserDetail;
