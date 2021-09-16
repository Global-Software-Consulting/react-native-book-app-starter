//to update the favorites list
import {useIsFocused, useNavigation} from '@react-navigation/native';
//importing card component
import BookCard from 'components/BookCard/BookCard';
import images from 'config/images';
import i18n from 'config/Languages/index';
import {IBookState} from 'models/reducers/fetchBooks';
import {ILoginState} from 'models/reducers/login';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {
  FlatList,
  Image,
  RefreshControl,
  ScrollView,
  TouchableHighlight,
  View,
} from 'react-native';
import {Text} from 'react-native-paper';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import Toast from 'react-native-simple-toast';
import {useDispatch, useSelector} from 'react-redux';
import * as appActions from 'store/actions/appActions';
import NetworkUtils from 'utils/networkUtils';
import {useStyles} from '../styles';

interface Props {
  books?: {};
  base_url?: string;
}

interface IStateReducer {
  loginReducer: ILoginState;
  appReducer: IBookState;
}

const initI18n = i18n;

const Container: React.FC<Props> = ({books, base_url}) => {
  //theme handling
  const styles = useStyles();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const {t, i18n} = useTranslation();
  const navigation = useNavigation();
  const isLoading = useSelector(
    (state: IStateReducer) => state.appReducer.isFetching,
  );
  const favoriteBooks = useSelector(
    (state: IStateReducer) => state.appReducer.favorite,
  );

  useEffect(() => {
    getFavoriteBooks;
  }, []);

  //fetching favorite books
  const getFavoriteBooks = async () => {
    const isConnected = await NetworkUtils.isNetworkAvailable();
    if (isConnected) {
      dispatch(appActions.IFetchFavoriteBooksRequest());
    } else {
      Toast.show('You are offline', Toast.SHORT);
    }
  };

  const navigateToDetails = async (params: object) => {
    //to check if the internet connection is working
    const isConnected = await NetworkUtils.isNetworkAvailable();
    if (isConnected) {
      navigation.navigate('BookDetail', params);
    } else {
      Toast.show('You are offline', Toast.SHORT);
    }
  };

  const FavoriteBooks = () => {
    return (
      <View>
        <FlatList
          nestedScrollEnabled={true}
          numColumns={2}
          contentContainerStyle={styles.flatList}
          data={favoriteBooks}
          renderItem={({item, index}) => (
            <TouchableHighlight
              key={item}
              underlayColor="grey"
              onPress={() => {
                navigateToDetails(item);
              }}>
              <BookCard
                url={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoE4lMLbADvLAxUvZf5ZAGvHUZ3KpBWFTW1g&usqp=CAU'
                }
                styleSelect="Large"
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
        {favoriteBooks.length > 0 ? (
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
