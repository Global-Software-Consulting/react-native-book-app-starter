import { useDeviceOrientation } from '@react-native-community/hooks';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Dimensions, PixelRatio } from 'react-native';

const widthPercentageToDP = (screenWidth, widthPercent) => {
    const elemWidth = typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const heightPercentageToDP = (screenHeight, heightPercent) => {
    const elemHeight =
        typeof heightPercent === 'number' ? heightPercent : parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

export function getPercentageWidth() {
    const [width, setWidth] = useState(Dimensions.get('window').width);
    useEffect(() => {
        Dimensions.addEventListener('change', (newDimensions) => {
            // Retrieve and save new dimensions
            screenWidth = newDimensions.window.width;
            setWidth(screenWidth);
        });
        return Dimensions.removeEventListener('change', () => {});
    }, []);
    const wp = useCallback((value) => widthPercentageToDP(width, value), [width]);

    return wp;
}
export function getPercentageHeight() {
    const [height, setHeight] = useState(Dimensions.get('window').height);
    useEffect(() => {
        Dimensions.addEventListener('change', (newDimensions) => {
            screenHeight = newDimensions.window.height;
            setHeight(screenHeight);
        });
        return Dimensions.removeEventListener('change', () => {});
    }, []);
    const hp = useCallback((value) => heightPercentageToDP(height, value), [height]);

    return hp;
}
