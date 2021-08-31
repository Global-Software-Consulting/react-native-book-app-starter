import React from 'react';
import {View,TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import styles from './styles';
import {useTranslation} from 'react-i18next';

import i18n from "../../components/Languages/i18n";
const initI18n = i18n;
const Home: React.FC = () => {
  const {t, i18n} = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>{t('Home Sreen')} </Text>
      <Text style={styles.labelStyle}>{t('Dark Theme')} </Text>
      </View>
   
  );
};

export default Home;
