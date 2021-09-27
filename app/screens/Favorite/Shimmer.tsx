//importing card component
import BookCardShimmer from 'components/BookCard/BookCardShimmer';
import React from 'react';
import { FlatList, TouchableHighlight, View } from 'react-native';
import { useStyles } from './styles';
import { useDeviceOrientation } from '@react-native-community/hooks';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const Shimmer: React.FC = () => {
    //theme handling
    const styles = useStyles();
    const orientation = useDeviceOrientation();

    return (
        <View
            style={{
                height: heightPercentageToDP('100%'),
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <FlatList
                numColumns={orientation.portrait ? 2 : 4}
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
