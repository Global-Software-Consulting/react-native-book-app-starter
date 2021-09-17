import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './styles';

const Home: React.FC = () => {
    const { t } = useTranslation();
    return (
        <View style={styles.container}>
            <Text style={styles.labelStyle}>{t('Home Sreen')} </Text>
            <Text style={styles.labelStyle}>{t('Dark Theme')} </Text>
        </View>
    );
};

export default Home;
