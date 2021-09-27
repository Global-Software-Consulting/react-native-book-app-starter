import React, { ReactNode } from 'react';
import {
    Platform,
    TouchableHighlight as RNTouchableHighlight,
    TouchableOpacity,
} from 'react-native';
interface Props {
    children: ReactNode;
}
export const TouchableHighlight = (props: Props) => {
    if (Platform.OS === 'ios') {
        return <RNTouchableHighlight>{props.children}</RNTouchableHighlight>;
    } else {
        return <TouchableOpacity>{props.children}</TouchableOpacity>;
    }
};
