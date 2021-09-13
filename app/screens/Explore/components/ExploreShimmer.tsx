import React from 'react';
import {FlatList, TouchableHighlight, View} from 'react-native';
import {useStyles} from '../styles';
//importing card component
import BookCardShimmer from './../../../components/BookCard/BookCardShimmer';

const ExploreShimmer: React.FC<Props> = ({}) => {
  const styles = useStyles();

  return (
    <View>
      <View style={styles.searchViewShimmer}></View>
      <View style={styles.nameStyleShimmer}></View>
      <View style={styles.tagLineStyleShimmer}></View>

      <View style={styles.horizontalRuler} />

      <View style={styles.listCaptionStyleShimmer}></View>
      <FlatList
        horizontal
        data={[0, 0, 0]}
        contentContainerStyle={styles.flatList}
        renderItem={({item, index}) => (
          <TouchableHighlight
            key={item}
            underlayColor="grey"
            onPress={() => {}}>
            <BookCardShimmer styleSelect="Custom" />
          </TouchableHighlight>
        )}
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.horizontalRuler} />

      <View style={styles.listCaptionStyleShimmer}></View>
      <FlatList
        horizontal
        data={[0, 0, 0]}
        contentContainerStyle={styles.flatList}
        renderItem={({item, index}) => (
          <TouchableHighlight
            key={item}
            underlayColor="grey"
            onPress={() => {}}>
            <BookCardShimmer styleSelect="General" />
          </TouchableHighlight>
        )}
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.horizontalRuler} />

      <View style={styles.listCaptionStyleShimmer}></View>
      <FlatList
        horizontal
        data={[0, 0, 0]}
        contentContainerStyle={styles.flatListLast}
        renderItem={({item, index}) => (
          <TouchableHighlight
            key={item}
            underlayColor="grey"
            onPress={() => {}}>
            <BookCardShimmer styleSelect="General" />
          </TouchableHighlight>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ExploreShimmer;
