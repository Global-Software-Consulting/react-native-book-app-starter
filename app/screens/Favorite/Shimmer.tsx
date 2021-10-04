//importing card component
import BookCardShimmer from 'components/BookCard/BookCardShimmer';
import React from 'react';
import { Dimensions } from 'react-native';
import { FlatList, TouchableHighlight, View } from 'react-native';
import { useStyles } from './styles';
import { useTheme } from 'react-native-paper';
const Shimmer: React.FC = () => {
    //theme handling
    const styles = useStyles();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const theme = useTheme();
    const bookList = (item: number) => {
        return (
            <TouchableHighlight
                key={item}
                underlayColor={theme.colors.highlight}
                onPress={() => {}}>
                <BookCardShimmer styleSelect="Large" />
            </TouchableHighlight>
        );
    };
    return (
        <View style={styles.mainShimmerView}>
            <FlatList
                numColumns={windowHeight > windowWidth ? 2 : 4}
                keyExtractor={(item, index) => 'key' + index}
                key={windowHeight > windowWidth ? 2 : 4}
                data={[0, 0, 0, 0]}
                contentContainerStyle={styles.flatList}
                renderItem={({ item }) => bookList(item)}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default Shimmer;
