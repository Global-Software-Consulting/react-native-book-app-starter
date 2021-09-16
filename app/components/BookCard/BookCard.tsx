import AsyncStorage from '@react-native-async-storage/async-storage';
//to update heart icon on focus
import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
//image with placeholder
import FastImage from 'react-native-fast-image';
import {Text} from 'react-native-paper';
//verctor icons
import Icon from 'react-native-vector-icons/FontAwesome';
//for responsive screen
import {useDispatch, useSelector} from 'react-redux';
import addBookToFavoite from 'services/addBookToFavoite';
import removeBookFromFavoite from 'services/removeBookFromFavoite';
import * as appActions from 'store/actions/appActions';
//importing style
import styles from './styles';
interface Props {
  book?: {};
  id?: number;
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
  const token = useSelector(state => state.loginReducer.token);

  const isFocused = useIsFocused();
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    let isAdded = newFavorites?.findIndex(data => {
      if (data.bookId == id) setIsFavorite(true);
    });
  }, [isFocused]);

  const dispatch = useDispatch();

  const addBooktoFavorite = async () => {
    dispatch(appActions.IAddToFavoritesRequest(parseInt(id)));
    // dispatch(appActions.IFetchFavoriteBooksRequest(token));
  };

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        return value;
      } else {
        return '';
      }
    } catch (e) {
      return '';
    }
  };
  const apiAddFavorite = async () => {
    const token = await getToken();

    if (isFavorite) {
      setIsFavorite(false);
      removeBookFromFavoite(id).then(response => {
        if (response && response.status == 'success') {
        } else {
          setIsFavorite(true);
        }
      });
    } else {
      setIsFavorite(true);

      addBookToFavoite(id)
        .then(response => {
          if (response && response.status == 'success') {
          } else {
            setIsFavorite(false);

            // dispatch(enableSnackbar("Some Thing While Posting Comment"))
          }
          // dispatch(disableLoading())
        })
        .catch(() => {
          setIsFavorite(false);
        });
    }
  };

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
              : styleSelect == 'Custom'
              ? styles.heartIconTrending
              : styles.heartIconLarge
          }
          color={isFavorite ? 'red' : 'white'}
          onPress={apiAddFavorite}
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
