import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
//image with placeholder
import FastImage from 'react-native-fast-image';
//verctor icons
import Icon from 'react-native-vector-icons/FontAwesome';
//importing style
import styles from './styles';
//for responsive screen
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
//to update heart icon
import {useIsFocused} from '@react-navigation/native';

interface Props {
  book?: {};
  id?: string;
  hideIcon?: boolean;
  url?: string;
  bookTitle?: string;
  styleSelect: 'General' | 'Custom' | 'Large' | 'ExtraLarge';
  refreshing?: boolean;
  authorName?: string;
  isFavorite?: boolean;
}

const BookCard: React.FC<Props> = ({
  id,
  url,
  book,
  styleSelect,
  bookTitle,
  hideIcon,
  refreshing,
  authorName,
}) => {
  const newFavorites = useSelector(state => state.appReducer.favorite);
  const isFocused = useIsFocused();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    let isAdded = newFavorites?.findIndex(data => {
      return data.id == id;
    });

    setIsFavorite(isAdded == -1 ? false : true);
  }, [id, isFocused]);

  const dispatch = useDispatch();
  return (
    <View style={styles.bookView}>
      <FastImage
        source={{uri: url, priority: FastImage.priority.normal}}
        resizeMode="contain"
        style={
          styleSelect == 'General'
            ? styles.bookGeneral
            : styleSelect == 'Custom'
            ? styles.bookTrending
            : styleSelect == 'Large'
            ? styles.bookLarge
            : styles.bookExtraLarge
        }
      />
      {!hideIcon && (
        <Icon
          name="heart"
          size={25}
          style={
            styleSelect == 'General'
              ? styles.heartIconGeneral
              : styles.heartIconTrending
          }
          color={isFavorite ? 'red' : 'white'}
          onPress={() => {}}
        />
      )}
      <Text
        style={
          styleSelect == 'General' ||
          styleSelect == 'Custom' ||
          styleSelect == 'Large'
            ? styles.textTitle
            : styles.textTitleEnlarged
        }>
        {bookTitle}
      </Text>
      <Text
        style={
          styleSelect == 'General' ||
          styleSelect == 'Custom' ||
          styleSelect == 'Large'
            ? styles.authorTitle
            : styles.authorTitleEnlarged
        }>
        {authorName}
      </Text>
    </View>
  );
};



export default BookCard;