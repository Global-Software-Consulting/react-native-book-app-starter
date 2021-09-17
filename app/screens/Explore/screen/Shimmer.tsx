//importing card component
import BookCardShimmer from 'components/BookCard/BookCardShimmer';
import React from 'react';
import { FlatList, TouchableHighlight, View } from 'react-native';
import { useStyles } from '../styles';

const ExploreShimmer: React.FC = () => {
    const styles = useStyles();

    return (
        <View>
            <View style={styles.searchViewShimmer} />
            <View style={styles.nameShimmer} />
            <View style={styles.tagLineShimmer} />

            <View style={styles.horizontalRuler} />

            <View style={styles.listCaptionShimmer} />
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

            <View style={styles.horizontalRuler} />

            <View style={styles.listCaptionShimmer} />
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

            <View style={styles.horizontalRuler} />

            <View style={styles.listCaptionShimmer} />
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
