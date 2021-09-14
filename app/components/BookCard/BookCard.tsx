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
import addBooktoFavorite from 'store/sagas/addBookToFavoritesSaga';
import * as appActions from 'store/actions/appActions';
import addBookToFavoite from 'services/addBookToFavoite';
import removeBookFromFavoite from 'services/removeBookFromFavoite';
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
  const token = useSelector(state => state.loginReducer.token);

  const isFocused = useIsFocused();
  const [isFavorite, setIsFavorite] = useState(false);
  console.log('favoritao', newFavorites);
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

  const apiAddFavorite = () => {
    if (isFavorite) {
      setIsFavorite(false);
      removeBookFromFavoite(id).then(response => {
        console.log('removefromfavorites', response);

        if (response && response.status == 'success') {
        } else {
          setIsFavorite(true);

          console.log('Error', response);
        }
      });
    } else {
      setIsFavorite(true);

      addBookToFavoite(id)
        .then(response => {
          console.log('addBookToFavoite', response);

          if (response && response.status == 'success') {
          } else {
            setIsFavorite(false);

            console.log('Error', response);

            // dispatch(enableSnackbar("Some Thing While Posting Comment"))
          }
          // dispatch(disableLoading())
        })
        .catch(() => {
          setIsFavorite(false);

          console.log('Catch');
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