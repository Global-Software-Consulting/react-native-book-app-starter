import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableHighlight,
  FlatList,
  Alert,
  BackHandler,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Text} from 'react-native-paper';
import SearchIcon from '@mui/icons-material/Search';
import {useDispatch} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as fetchActions from './../../../store/actions/appActions';
import {useSelector} from 'react-redux';
import NavigationService from './../../../navigation/NavigationService';
//importing card component
import BookCard from './../../../components/BookCard/BookCard';
import {useStyles} from '../styles';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  return (
    <View>
      {/* Searchbar */}
      <View style={styles.searchView}>
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="Search Here"
          onChangeText={text => setSearchText(text)}
          style={styles.searchViewChildren}
          onEndEditing={() =>
            dispatch(fetchActions.IFetchBooksRequest(searchText))
          }
        />
        <Icon
          name="find-in-page"
          size={30}
          style={styles.searchViewChildren}
          onPress={() => dispatch(fetchActions.IFetchBooksRequest(searchText))}
        />
      </View>
      <Text style={styles.nameStyle}>Hi {name} </Text>
      <Text style={styles.tagLineStyle}>Let's find something new </Text>

      <View style={styles.horizontalRuler} />

      <Text style={styles.listCaptionStyle}>Trending</Text>
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

      <Text style={styles.listCaptionStyle}>New Releases</Text>
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

      <Text style={styles.listCaptionStyle}>Selected for you</Text>
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
