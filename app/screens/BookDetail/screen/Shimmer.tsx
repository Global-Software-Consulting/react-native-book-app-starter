import React, {useState} from 'react';
//importing card component
import BookCardShimmer from '../../../components/BookCard/BookCardShimmer';
import {useStyles} from '../styles';
import {ScrollView, View} from 'react-native';

interface Props {
  books?: [];
  base_url?: string;
}

const Shimmer: React.FC<Props> = ({books, base_url}) => {
  //theme handling
  const styles = useStyles();

  return (
    <View>
      <ScrollView>
        <BookCardShimmer />

        <View style={styles.horizontalRuler} />

        <View style={styles.mainShimmerView}></View>

        <View style={styles.subShimmerView}></View>
      </ScrollView>
    </View>
  );
};

export default Shimmer;
