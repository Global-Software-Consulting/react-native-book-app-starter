import React from 'react';
import {View} from 'react-native';
import {Button,Text} from 'react-native-paper';


import {useDispatch} from 'react-redux';
import * as loginActions from 'store/actions/loginActions';
import styles from './styles';
const Favorites: React.FC = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());

  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>Favorites Screen</Text>
    
    </View>
  );
};

export default Favorites;
