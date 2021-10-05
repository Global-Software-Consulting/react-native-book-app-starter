//importing card component
import BookCardShimmer from 'components/BookCard/BookCardShimmer';
import React from 'react';
import { FlatList, ScrollView, TouchableHighlight, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useStyles } from './styles';
const ExploreShimmer: React.FC = () => {
    const styles = useStyles();
    const theme = useTheme();
    const bookList = (item: number, style: 'General' | 'Custom') => {
        return (
            <TouchableHighlight key={item} underlayColor={theme.colors.highlight}>
                <BookCardShimmer styleSelect={style} />
            </TouchableHighlight>
        );
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingLeft: 20 }}>
                <View style={styles.nameShimmer} />
                <View style={styles.tagLineShimmer} />

                <View style={styles.horizontalRuler} />

                <View style={styles.listCaptionShimmer} />
                <FlatList
                    horizontal
                    data={[0, 0, 0]}
                    contentContainerStyle={styles.flatList}
                    renderItem={({ item }) => bookList(item, 'Custom')}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => 'key' + index}
                />
                <View style={styles.horizontalRuler} />

                <View style={styles.listCaptionShimmer} />
                <FlatList
                    horizontal
                    data={[0, 0, 0]}
                    contentContainerStyle={styles.flatList}
                    renderItem={({ item }) => bookList(item, 'General')}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => 'key' + index}
                />

                <View style={styles.horizontalRuler} />

                <View style={styles.listCaptionShimmer} />
                <FlatList
                    horizontal
                    data={[0, 0, 0]}
                    contentContainerStyle={styles.flatListLast}
                    renderItem={({ item }) => bookList(item, 'General')}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => 'key' + index}
                />
            </View>
        </ScrollView>
    );
};

export default ExploreShimmer;
