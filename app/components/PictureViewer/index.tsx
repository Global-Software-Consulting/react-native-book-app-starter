import React from 'react';
import { View, Image, ImageProps, ImageSourcePropType } from 'react-native';
import Modal from 'react-native-modal';
import { Text } from 'react-native-paper';

interface Props {
    isVisible: boolean;
    imageSource: ImageSourcePropType;
    onPress: () => void;
}
const PictureViewer: React.FC<Props> = (props) => {
    return (
        <Modal isVisible={props.isVisible} animationIn="slideInUp">
            <View
                style={{ height: 400, width: 400, backgroundColor: 'white', alignSelf: 'center' }}>
                <Image source={props.imageSource} style={{ width: 400, height: 400 }} />
                <Text style={{ color: 'red', alignSelf: 'center' }} onPress={props.onPress}>
                    Close
                </Text>
            </View>
        </Modal>
    );
};
export default PictureViewer;
