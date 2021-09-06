import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableHighlight,
  FlatList,
  Alert,
  BackHandler,
} from 'react-native';
import {Text} from 'react-native-paper';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import NavigationService from './../../../navigation/NavigationService';
//importing card component
import BookCard from './../../../components/BookCard/BookCard';
import {useStyles} from '../styles';

interface Props {
  books?: [];
  name?: string;
  base_url?: string;
}

const ExploreComponent: React.FC<Props> = ({books, name, base_url}) => {
  //theme handling
  const styles = useStyles();
  const favoriteBooks = useSelector(state => state.bookFetchReducer.favorite);
  const newFavorites: string[] = favoriteBooks;

  return (
    <View>
      <Text style={styles.nameStyle}>Hi {name} </Text>
      <Text style={styles.tagLineStyle}>Let's find something new </Text>

      <View style={styles.horizontalRuler} />

      <Text style={styles.listCaptionStyle}>Trending</Text>
      <FlatList
        horizontal
        data={books?.filter(item => {
          return item.averageRating > 3;
        })}
        contentContainerStyle={styles.flatList}
        renderItem={({item, index}) => (
          <TouchableHighlight
            key={item}
            underlayColor="grey"
            onPress={() => {
              BackHandler.removeEventListener('hardwareBackPress'),
                NavigationService.navigate('BookDetail', item);
            }}>
            <BookCard
              url={'https://edit.org/images/cat/book-covers-big-2019101610.jpg'}
              isFavorite={
                newFavorites.indexOf(item.title) !== -1 ? true : false
              }
              styleSelect="Custom"
              bookTitle={item.title}
              book={item}
              id={item.id}
            />
          </TouchableHighlight>
        )}
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.horizontalRuler} />

      <Text style={styles.listCaptionStyle}>New Releases</Text>
      <FlatList
        horizontal
        data={books?.filter(item => {
          return item.averageRating <= 3 && item.averageRating > 0;
        })}
        contentContainerStyle={styles.flatList}
        renderItem={({item, index}) => (
          <TouchableHighlight
            key={item}
            underlayColor="grey"
            onPress={() => {
              NavigationService.navigate('BookDetail', item);
            }}>
            <BookCard
              url={'https://edit.org/images/cat/book-covers-big-2019101610.jpg'}
              styleSelect="General"
              bookTitle={item.title}
              book={item}
              id={item.id}
            />
          </TouchableHighlight>
        )}
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.horizontalRuler} />

      <Text style={styles.listCaptionStyle}>Selected for you</Text>
      <FlatList
        horizontal
        data={books?.filter(item => {
          return item.averageRating == 0;
        })}
        contentContainerStyle={styles.flatListLast}
        renderItem={({item, index}) => (
          <TouchableHighlight
            key={item}
            underlayColor="grey"
            onPress={() => {
              NavigationService.navigate('BookDetail', item);
            }}>
            <BookCard
              url={'https://edit.org/images/cat/book-covers-big-2019101610.jpg'}
              isFavorite={
                newFavorites.indexOf(item.title) !== -1 ? true : false
              }
              styleSelect="General"
              bookTitle={item.title}
              book={item}
              id={item.id}
            />
          </TouchableHighlight>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ExploreComponent;
