import React from 'react';
import {View} from 'react-native';
import {Button,Text} from 'react-native-paper';

import NavigationService from 'navigation/NavigationService';

import styles from './styles';
const Home: React.FC = () => {
  const goBack = () => NavigationService.goBack();
  return (
    <View style={styles.container}>
         <Text style={styles.labelStyle}>Forgot Password Sreen</Text>
      <Button icon="keyboard-backspace" mode="outlined" onPress={goBack}>
        Go Back
      </Button>
    </View>
  );
};

export default Home;
