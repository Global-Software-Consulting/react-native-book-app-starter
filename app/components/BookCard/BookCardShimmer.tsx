import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
//importing style
import { useStyles } from './styles';

interface Props {
    styleSelect: 'General' | 'Custom' | 'Large';
}
const BookCardShimmer: React.FC<Props> = ({ styleSelect }) => {
    const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);
    const styles = useStyles();
    return (
        <View style={styles.bookView}>
            <View
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
            <View
                style={
                    styleSelect === 'General' || styleSelect === 'Custom' || styleSelect === 'Large'
                        ? styles.textTitleShimmer
                        : styles.textTitleShimmer
                }
            />
            <View
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
