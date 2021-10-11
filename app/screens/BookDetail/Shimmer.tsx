import React from 'react';
import { ScrollView, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { useStyles } from './styles';

const Shimmer: React.FC = () => {
    //theme handling
    const styles = useStyles();

    return (
        <View>
            <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
                <View style={styles.bookShimmer} />
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.tagLineShimmer} />
                    <View style={styles.tagLineShimmer} />
                </View>

                <View style={styles.mainShimmerView} />

                <View style={styles.tagLineShimmerLeft} />
                <View style={styles.subShimmerView} />
            </ScrollView>
        </View>
    );
};

export default Shimmer;
