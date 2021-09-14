//to update the favorites list
import {useIsFocused} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Alert,
  FlatList,
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  View,
} from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import {Text} from 'react-native-paper';
import {useStyles} from '../styles';
import {heightPercentageToDP} from 'react-native-responsive-screen';
//importing card component
import BookCard from 'components/BookCard/BookCard';
import * as appActions from 'store/actions/appActions';
import images from 'config/images';
import i18n from 'config/Languages/index';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  books?: [];
  base_url?: string;
}
const initI18n = i18n;

const Container: React.FC<Props> = ({books, base_url}) => {
  //theme handling
  const styles = useStyles();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const {t, i18n} = useTranslation();
  const navigation = useNavigation();
  const isLoading = useSelector(state => state.appReducer.isFetching);
  const favoriteBooks = useSelector(state => state.appReducer.favorite);

  useEffect(() => {
    getFavoriteBooks;
  }, []);

  //fetching favorite books
  const getFavoriteBooks = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        dispatch(appActions.IFetchFavoriteBooksRequest(value));
      } else {
        Alert.alert('Book App', 'Please login again');
      }
    } catch (e) {}
  };

  const FavoriteBooks = () => {
    return (
      <View>
        <FlatList
          numColumns={2}
          contentContainerStyle={styles.flatList}
          data={favoriteBooks}
          renderItem={({item, index}) => (
            <TouchableHighlight
              key={item}
              underlayColor="grey"
              onPress={() => {
                navigation.navigate('BookDetail', item);
              }}>
              <BookCard
                url={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoE4lMLbADvLAxUvZf5ZAGvHUZ3KpBWFTW1g&usqp=CAU'
                }
                styleSelect="Large"
                title={item?.book?.title}
                id={item?.book.id}
                bookTitle={item?.book?.title}
                book={favoriteBooks}
                hideIcon={false}
              />
            </TouchableHighlight>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  return (
    <View style={{height: heightPercentageToDP('100%')}}>
      <ScrollView
        style={styles.container}
        nestedScrollEnabled
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={getFavoriteBooks} />
        }>
        {favoriteBooks != [] ? (
          <FavoriteBooks />
        ) : (
          <View style={styles.favoriteView}>
            <Image
              source={images.books.noBookFound}
              style={styles.imageError}
            />
            <Text style={styles.bookmark}>No bookmarks available</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Container;
