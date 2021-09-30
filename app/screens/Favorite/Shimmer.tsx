//importing card component
import BookCardShimmer from 'components/BookCard/BookCardShimmer';
import React from 'react';
import { Dimensions } from 'react-native';
import { FlatList, TouchableHighlight, View } from 'react-native';
import { useStyles } from './styles';

const Shimmer: React.FC = () => {
    //theme handling
    const styles = useStyles();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
        <View style={styles.mainShimmerView}>
            <FlatList
                numColumns={windowHeight > windowWidth ? 2 : 3}
                key={windowHeight > windowWidth ? 2 : 3}
                data={[0, 0, 0, 0, 0, 0, 0, 0]}
                contentContainerStyle={styles.flatList}
                renderItem={({ item }) => (
                    <TouchableHighlight key={item} underlayColor="grey" onPress={() => {}}>
                        <BookCardShimmer styleSelect="Large" />
                    </TouchableHighlight>
                )}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default Shimmer;
