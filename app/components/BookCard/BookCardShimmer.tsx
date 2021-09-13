import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
//importing style
import styles from './styles';

interface Props {
  styleSelect: 'General' | 'Custom' | 'Large';
}
const BookCardShimmer: React.FC<Props> = ({styleSelect}) => {
  return (
    <View style={styles.bookView}>
      <View
        style={
          styleSelect == 'General'
            ? styles.bookGeneralShimmer
            : styleSelect == 'Custom'
            ? styles.bookTrendingShimmer
            : styleSelect == 'Large'
            ? styles.bookLargeShimmer
            : styles.bookTrendingExtraLargeShimmer
        }
      />
      <Text
        style={
          styleSelect == 'General' ||
          styleSelect == 'Custom' ||
          styleSelect == 'Large'
            ? styles.textTitleShimmer
            : styles.textTitleShimmer
        }></Text>
      <Text
        style={
          styleSelect == 'General' ||
          styleSelect == 'Custom' ||
          styleSelect == 'Large'
            ? styles.textTitleShimmer
            : styles.textTitleShimmer
        }></Text>
    </View>
  );
};

export default BookCardShimmer;