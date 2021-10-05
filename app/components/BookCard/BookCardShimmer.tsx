import React from 'react';
import { View } from 'react-native';
//importing style
import { useStyles } from './styles';

interface Props {
    styleSelect: 'General' | 'Custom' | 'Large';
}
const BookCardShimmer: React.FC<Props> = ({ styleSelect }) => {
    const styles = useStyles();
    return (
        <View style={styles.bookViewIOS}>
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
