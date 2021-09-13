import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, TextInput, TouchableHighlight, View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {useStyles} from '../styles';
//importing card component
import BookCard from './../../../components/BookCard/BookCard';
import i18n from './../../../config/Languages/index';
import NavigationService from './../../../navigation/NavigationService';
import * as appActions from './../../../store/actions/appActions';
interface Props {
  books?: [];
  name?: string;
  base_url?: string;
}
const initI18n = i18n;

const ExploreComponent: React.FC<Props> = ({books, name, base_url}) => {
  //theme handling
  const styles = useStyles();
  const {t, i18n} = useTranslation();
  const theme = useTheme();
  const favoriteBooks = useSelector(state => state.appReducer.favorite);
  const newFavorites: string[] = favoriteBooks;
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  return (
    <View>
      {/* Searchbar */}
      <View style={styles.searchView}>
        <TextInput
          underlineColorAndroid="transparent"
          placeholder={t('Search Here')}
          placeholderTextColor={theme.colors.text}
          onChangeText={text => setSearchText(text)}
          style={styles.searchViewChildren}
          onEndEditing={() =>
            dispatch(appActions.IFetchBooksRequest(searchText))
          }
        />
        <Icon
          name="find-in-page"
          size={30}
          style={styles.searchViewChildren}
          onPress={() => dispatch(appActions.IFetchBooksRequest(searchText))}
        />
      </View>
      <Text style={styles.nameStyle}>
        {t('Hi')} {name}{' '}
      </Text>
      <Text style={styles.tagLineStyle}>{t('Lets find something new')}</Text>

      <View style={styles.horizontalRuler} />

      <Text style={styles.listCaptionStyle}>{t('Trending')}</Text>
      <FlatList
        horizontal
        data={books.filter(item => {
          return item?.averageRating > 3;
        })}
        contentContainerStyle={styles.flatList}
        renderItem={({item, index}) => (
          <TouchableHighlight
            key={item}
            underlayColor="grey"
            onPress={() => {
              NavigationService.navigate('BookDetail', item.id);
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

      <Text style={styles.listCaptionStyle}>{t('New Releases')}</Text>
      <FlatList
        horizontal
        data={books.filter(item => {
          return item?.averageRating <= 3 && item?.averageRating > 0;
        })}
        contentContainerStyle={styles.flatList}
        renderItem={({item, index}) => (
          <TouchableHighlight
            key={item}
            underlayColor="grey"
            onPress={() => {
              NavigationService.navigate('BookDetail', item.id);
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

      <Text style={styles.listCaptionStyle}>{t('Selected for you')}</Text>
      <FlatList
        horizontal
        data={books.filter(item => {
          return item?.averageRating == 0;
        })}
        contentContainerStyle={styles.flatListLast}
        renderItem={({item, index}) => (
          <TouchableHighlight
            key={item}
            underlayColor="grey"
            onPress={() => {
              NavigationService.navigate('BookDetail', item.id);
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
  );
};

export default ExploreComponent;
