import React from 'react';
import { ScrollView, View } from 'react-native';
import { useStyles } from '../styles';

const Shimmer: React.FC = () => {
    //theme handling
    const styles = useStyles();

    return (
        <View>
            <ScrollView>
                <View style={styles.bookShimmer} />

                <View style={styles.horizontalRuler} />

                <View style={styles.mainShimmerView} />

                <View style={styles.subShimmerView} />
            </ScrollView>
        </View>
    );
};

export default Shimmer;
