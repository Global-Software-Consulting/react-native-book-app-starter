import React from 'react';
import {FlatList, TouchableHighlight, View} from 'react-native';
import {Text} from 'react-native-paper';
import {useStyles} from '../styles';
//importing card component
import BookCardShimmer from 'components/BookCard/BookCardShimmer';

interface Props {
  books?: [];
  base_url?: string;
}

const FavoriteShimmer: React.FC<Props> = ({books, base_url}) => {
  //theme handling
  const styles = useStyles();

  return (
    <View>
      <Text style={styles.name}>My Favorites</Text>
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

export default FavoriteShimmer;
