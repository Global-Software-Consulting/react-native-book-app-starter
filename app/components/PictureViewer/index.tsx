import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Modal from 'react-native-modal';
import { Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { Props } from './types';
import { useStyles } from './styles';
const PictureViewer: React.FC<Props> = (props) => {
    const { t } = useTranslation();
    const styles = useStyles();
    return (
        <Modal isVisible={props.isVisible} animationIn="slideInUp">
            <View style={styles.mainView}>
                <Image source={props.imageSource} style={styles.image} />
            </View>
            <TouchableOpacity style={styles.closeButton} onPress={props.onPress}>
                <Text style={styles.text}>{t('Close')}</Text>
            </TouchableOpacity>
        </Modal>
    );
};
export default PictureViewer;
