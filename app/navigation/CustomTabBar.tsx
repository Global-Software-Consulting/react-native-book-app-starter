import React from 'react';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { BlurView } from '@react-native-community/blur';

const CustomTabBar = (props) => {
    <BlurView
        style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
        }}
        blurType="dark"
        blurAmount={10}
        blurRadius={25}
        overlayColor="red">
        <BottomTabBar {...props} />
    </BlurView>;
    return <BottomTabBar {...props} />;
};

export default CustomTabBar;
