//importing card component
import BookCardShimmer from 'components/BookCard/BookCardShimmer';
import React from 'react';
import { FlatList, ScrollView, TouchableHighlight, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from 'react-native-paper';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { useStyles } from './styles';
const ExploreShimmer: React.FC = () => {
    const styles = useStyles();
    const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);
    const theme = useTheme();
    const bookList = (item: number, style: 'General' | 'Custom') => {
        return (
            <TouchableHighlight key={item} underlayColor={theme.colors.highlight}>
                <BookCardShimmer styleSelect={style} />
            </TouchableHighlight>
        );
    };
    return (
        <ScrollView>
            <View style={{ paddingLeft: 20 }}>
                <ShimmerPlaceHolder style={styles.nameShimmer} />
                <ShimmerPlaceHolder style={styles.tagLineShimmer} />

                <ShimmerPlaceHolder style={styles.horizontalRuler} />

                <ShimmerPlaceHolder style={styles.listCaptionShimmer} />
                <FlatList
                    horizontal
                    data={[0, 0, 0]}
                    contentContainerStyle={styles.flatList}
                    renderItem={({ item }) => bookList(item, 'Custom')}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => 'key' + index}
                />
                <ShimmerPlaceHolder style={styles.horizontalRuler} />

                <ShimmerPlaceHolder style={styles.listCaptionShimmer} />
                <FlatList
                    horizontal
                    data={[0, 0, 0]}
                    contentContainerStyle={styles.flatList}
                    renderItem={({ item }) => bookList(item, 'General')}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => 'key' + index}
                />

                <ShimmerPlaceHolder style={styles.horizontalRuler} />

                <ShimmerPlaceHolder style={styles.listCaptionShimmer} />
                <FlatList
                    horizontal
                    data={[0, 0, 0]}
                    contentContainerStyle={styles.flatListLast}
                    renderItem={({ item }) => bookList(item, 'General')}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => 'key' + index}
                />
            </View>
        </ScrollView>
    );
};

export default ExploreShimmer;
