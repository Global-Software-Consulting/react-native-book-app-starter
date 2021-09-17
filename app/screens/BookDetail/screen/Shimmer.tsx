import React from 'react';
import { ScrollView, View } from 'react-native';
//importing card component
import BookCardShimmer from '../../../components/BookCard/BookCardShimmer';
import { useStyles } from '../styles';

const Shimmer: React.FC = () => {
    //theme handling
    const styles = useStyles();

    return (
        <View>
            <ScrollView>
                <BookCardShimmer styleSelect="Large" />

                <View style={styles.horizontalRuler} />

                <View style={styles.mainShimmerView} />

                <View style={styles.subShimmerView} />
            </ScrollView>
        </View>
    );
};

export default Shimmer;
