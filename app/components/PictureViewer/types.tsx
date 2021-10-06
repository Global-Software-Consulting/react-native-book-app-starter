import { ImageSourcePropType } from 'react-native';

export interface Props {
    isVisible: boolean;
    imageSource: ImageSourcePropType;
    onPress: () => void;
}
