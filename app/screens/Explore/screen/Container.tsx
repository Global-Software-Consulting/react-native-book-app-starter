import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Alert,
  FlatList,
  RefreshControl,
  ScrollView,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {useStyles} from 'screens/Explore/styles';
//importing card component
import BookCard from 'components/BookCard/BookCard';
import i18n from 'config/Languages/index';
import * as appActions from 'store/actions/appActions';
import * as loginActions from 'store/actions/loginActions';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {heightPercentageToDP} from 'react-native-responsive-screen';

interface Props {
  books?: [];
  name?: string;
  base_url?: string;
}
const initI18n = i18n;

const ExploreComponent: React.FC<Props> = ({name, base_url}) => {
  //theme handling
  const styles = useStyles();
  const {t, i18n} = useTranslation();
  const theme = useTheme();
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();
  //getting data from store
  const books = useSelector(state => state.appReducer.detail);

  const isLoading = useSelector(state => state.appReducer.isFetching);
  const favoriteBooks = useSelector(state => state.appReducer.favorite);
  const token = useSelector(state => state.loginReducer.token);
  const newFavorites: string[] = favoriteBooks;

  const searchBook = (bookName: string) => {
    dispatch(appActions.IFetchBooksRequest(bookName));
  };

  const fetchBookDetails = async () => {
    dispatch(appActions.IFetchBooksRequest('a'));
    getFavoriteBooks();
  };

  //fetching favorite books
  const getFavoriteBooks = async () => {
    dispatch(appActions.IFetchFavoriteBooksRequest());
  };

  return (
    <View style={styles.mainViewSetting}>
      {books.length > 0 && (
        <ScrollView
          style={styles.container}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={fetchBookDetails}
            />
          }>
          <View>
            {/* Searchbar */}
            <View style={styles.searchView}>
              <TextInput
                underlineColorAndroid="transparent"
                placeholder={t('Search Here')}
                placeholderTextColor={theme.colors.text}
                onChangeText={text => setSearchText(text)}
                style={styles.searchViewChildren}
                onEndEditing={() => searchBook(searchText)}
              />
              <Icon
                name="find-in-page"
                size={30}
                style={styles.searchViewChildren}
                onPress={() => searchBook(searchText)}
              />
            </View>
            <Text style={styles.name}>
              {t('Hi')} {name}{' '}
            </Text>
            <Text style={styles.tagLine}>{t('Lets find something new')}</Text>

            <View style={styles.horizontalRuler} />

            <Text style={styles.listCaption}>{t('Trending')}</Text>
            <FlatList
              horizontal
              data={books?.filter(item => {
                return item?.averageRating > 3;
              })}
              contentContainerStyle={styles.flatList}
              renderItem={({item, index}) => (
                <TouchableHighlight
                  key={item}
                  underlayColor="grey"
                  onPress={() => {
                    navigation.navigate('BookDetail', item.id);
                  }}>
                  <BookCard
                    url={
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoE4lMLbADvLAxUvZf5ZAGvHUZ3KpBWFTW1g&usqp=CAU'
                    }
                    isFavorite={
                      newFavorites.indexOf(item.title) !== -1 ? true : false
                    }
                    styleSelect="Custom"
                    bookTitle={item?.title}
                    book={item}
                    id={item?.id}
                  />
                </TouchableHighlight>
              )}
              showsHorizontalScrollIndicator={false}
            />

            <View style={styles.horizontalRuler} />

            <Text style={styles.listCaption}>{t('New Releases')}</Text>
            <FlatList
              horizontal
              data={books?.filter(item => {
                return item?.averageRating <= 3 && item?.averageRating > 0;
              })}
              contentContainerStyle={styles.flatList}
              renderItem={({item, index}) => (
                <TouchableHighlight
                  key={item}
                  underlayColor="grey"
                  onPress={() => {
                    navigation.navigate('BookDetail', item.id);
                  }}>
                  <BookCard
                    url={
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoE4lMLbADvLAxUvZf5ZAGvHUZ3KpBWFTW1g&usqp=CAU'
                    }
                    styleSelect="General"
                    bookTitle={item?.title}
                    book={item}
                    id={item?.id}
                  />
                </TouchableHighlight>
              )}
              showsHorizontalScrollIndicator={false}
            />

            <View style={styles.horizontalRuler} />

            <Text style={styles.listCaption}>{t('Selected for you')}</Text>
            <FlatList
              horizontal
              data={books?.filter(item => {
                return item?.averageRating == 0;
              })}
              contentContainerStyle={styles.flatListLast}
              renderItem={({item, index}) => (
                <TouchableHighlight
                  key={item}
                  underlayColor="grey"
                  onPress={() => {
                    navigation.navigate('BookDetail', item.id);
                  }}>
                  <BookCard
                    url={
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoE4lMLbADvLAxUvZf5ZAGvHUZ3KpBWFTW1g&usqp=CAU'
                    }
                    isFavorite={
                      newFavorites.indexOf(item?.title) !== -1 ? true : false
                    }
                    styleSelect="General"
                    bookTitle={item?.title}
                    book={item}
                    id={item?.id}
                  />
                </TouchableHighlight>
              )}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default ExploreComponent;
