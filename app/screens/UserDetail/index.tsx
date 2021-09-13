import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import * as loginActions from 'store/actions/loginActions';
import styles from './styles';

const UserDetail: React.FC = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Settings Screen</Text>
    </View>
  );
};

export default UserDetail;
