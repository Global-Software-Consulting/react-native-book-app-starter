import { useDeviceOrientation } from '@react-native-community/hooks';
import { useCallback, useMemo } from 'react';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export function useOrientation() {
    const orientation = useDeviceOrientation();

    const onChangeDimensions = useCallback(() => {
        if (orientation.portrait) {
            return { width: widthPercentageToDP, height: heightPercentageToDP };
        } else {
            return { width: heightPercentageToDP, height: widthPercentageToDP };
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [orientation]);
    return useMemo(
        () => onChangeDimensions(),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [orientation],
    );
}
