//importing card component
import BookCardShimmer from 'components/BookCard/BookCardShimmer';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';

import React from 'react';
import { FlatList, TouchableHighlight, View } from 'react-native';
import { useStyles } from './styles';

const ExploreShimmer: React.FC = () => {
    const styles = useStyles();
    const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

    return (
        <View style={{ paddingLeft: 20 }}>
            <ShimmerPlaceHolder style={styles.nameShimmer} />
            <ShimmerPlaceHolder style={styles.tagLineShimmer} />

            <ShimmerPlaceHolder style={styles.horizontalRuler} />

            <ShimmerPlaceHolder style={styles.listCaptionShimmer} />
            <FlatList
                horizontal
                data={[0, 0, 0]}
                contentContainerStyle={styles.flatList}
                renderItem={({ item }) => (
                    <TouchableHighlight key={item} underlayColor="grey" onPress={() => {}}>
                        <BookCardShimmer styleSelect="Custom" />
                    </TouchableHighlight>
                )}
                showsHorizontalScrollIndicator={false}
            />
            <ShimmerPlaceHolder style={styles.horizontalRuler} />

            <ShimmerPlaceHolder style={styles.listCaptionShimmer} />
            <FlatList
                horizontal
                data={[0, 0, 0]}
                contentContainerStyle={styles.flatList}
                renderItem={({ item }) => (
                    <TouchableHighlight key={item} underlayColor="grey" onPress={() => {}}>
                        <BookCardShimmer styleSelect="General" />
                    </TouchableHighlight>
                )}
                showsHorizontalScrollIndicator={false}
            />

            <ShimmerPlaceHolder style={styles.horizontalRuler} />

            <ShimmerPlaceHolder style={styles.listCaptionShimmer} />
            <FlatList
                horizontal
                data={[0, 0, 0]}
                contentContainerStyle={styles.flatListLast}
                renderItem={({ item }) => (
                    <TouchableHighlight key={item} underlayColor="grey" onPress={() => {}}>
                        <BookCardShimmer styleSelect="General" />
                    </TouchableHighlight>
                )}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default ExploreShimmer;
