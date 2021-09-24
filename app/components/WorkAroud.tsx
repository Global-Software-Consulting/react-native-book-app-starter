import React, { ReactElement, ReactNode } from 'react';
import {
    Platform,
    TouchableHighlight as RNTouchableHighlight,
    TouchableOpacity,
} from 'react-native';
import { TouchableHighlight as GSTouchableHighlight } from 'react-native-gesture-handler';
interface Props {
    children: ReactNode;
}
export const TouchableHighlight = (props: Props) => {
    if (Platform.OS == 'ios') {
        return <RNTouchableHighlight>{props.children}</RNTouchableHighlight>;
    } else {
        return <TouchableOpacity>{props.children}</TouchableOpacity>;
    }
};
