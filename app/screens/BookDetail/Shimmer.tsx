import React from 'react';
import { ScrollView, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { useStyles } from './styles';

const Shimmer: React.FC = () => {
    //theme handling
    const styles = useStyles();
    const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

    return (
        <View>
            <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
                <ShimmerPlaceHolder style={styles.bookShimmer} />
                <ShimmerPlaceHolder style={styles.horizontalRuler} />
                <ShimmerPlaceHolder style={styles.horizontalRuler} />

                <ShimmerPlaceHolder style={styles.mainShimmerView} />

                <ShimmerPlaceHolder style={styles.subShimmerView} />
            </ScrollView>
        </View>
    );
};

export default Shimmer;
