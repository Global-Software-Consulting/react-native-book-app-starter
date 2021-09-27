import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
//importing style
import styles from './styles';

interface Props {
    styleSelect: 'General' | 'Custom' | 'Large';
}
const BookCardShimmer: React.FC<Props> = ({ styleSelect }) => {
    const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

    return (
        <View style={styles.bookView}>
            <ShimmerPlaceHolder
                style={
                    styleSelect === 'General'
                        ? styles.bookGeneralShimmer
                        : styleSelect === 'Custom'
                        ? styles.bookTrendingShimmer
                        : styleSelect === 'Large'
                        ? styles.bookLargeShimmer
                        : styles.bookTrendingExtraLargeShimmer
                }
            />
            <ShimmerPlaceHolder
                style={
                    styleSelect === 'General' || styleSelect === 'Custom' || styleSelect === 'Large'
                        ? styles.textTitleShimmer
                        : styles.textTitleShimmer
                }
            />
            <ShimmerPlaceHolder
                style={
                    styleSelect === 'General' || styleSelect === 'Custom' || styleSelect === 'Large'
                        ? styles.textTitleShimmer
                        : styles.textTitleShimmer
                }
            />
        </View>
    );
};

export default BookCardShimmer;
