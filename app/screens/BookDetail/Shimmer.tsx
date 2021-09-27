import React from 'react';
import { ScrollView, View } from 'react-native';
import { useStyles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';

const Shimmer: React.FC = () => {
    //theme handling
    const styles = useStyles();
    const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

    return (
        <View>
            <ScrollView>
                <ShimmerPlaceHolder style={styles.bookShimmer} />

                <ShimmerPlaceHolder style={styles.horizontalRuler} />

                <ShimmerPlaceHolder style={styles.mainShimmerView} />

                <ShimmerPlaceHolder style={styles.subShimmerView} />
            </ScrollView>
        </View>
    );
};

export default Shimmer;
