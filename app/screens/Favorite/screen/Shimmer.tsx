//importing card component
import BookCardShimmer from 'components/BookCard/BookCardShimmer';
import React from 'react';
import {FlatList, TouchableHighlight, View} from 'react-native';
import {useStyles} from '../styles';

interface Props {}

const Shimmer: React.FC<Props> = () => {
  //theme handling
  const styles = useStyles();

  return (
    <View>
      <FlatList
        numColumns={2}
        data={[0, 0, 0, 0, 0, 0, 0, 0, 0]}
        contentContainerStyle={styles.flatList}
        renderItem={({item, index}) => (
          <TouchableHighlight
            key={item}
            underlayColor="grey"
            onPress={() => {}}>
            <BookCardShimmer styleSelect="Large" />
          </TouchableHighlight>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Shimmer;
