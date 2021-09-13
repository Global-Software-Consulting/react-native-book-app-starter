import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableHighlight,
  FlatList,
  Alert,
  BackHandler,
  Image,
} from 'react-native';
import {Text} from 'react-native-paper';
//importing card component
import BookCard from './../../../components/BookCard/BookCard';
import {useStyles} from '../styles';
import images from './../../../config/images';
import {useSelector} from 'react-redux';
//to update the favorites list
import {useIsFocused} from '@react-navigation/native';
import NavigationService from './../../../navigation/NavigationService';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import i18n from './../../../config/Languages/index';
import {useTranslation} from 'react-i18next';
interface Props {
  books?: [];
  base_url?: string;
}
const initI18n = i18n;

const FavoriteComponent: React.FC<Props> = ({books, base_url}) => {
  //theme handling
  const styles = useStyles();

  const [favoriteBooks, setFavoriteBooks] = useState(books);
  const isFocused = useIsFocused();
  const {t, i18n} = useTranslation();

  useEffect(() => {
    if (isFocused) setFavoriteBooks(books);
  }, [isFocused, books]);

  const FavoriteBooks = () => {
    return (
      <View>
        <Text style={styles.nameStyle}>{t('My Favorites')}</Text>
        <FlatList
          numColumns={2}
          contentContainerStyle={styles.flatList}
          data={favoriteBooks}
          renderItem={({item, index}) => (
            <TouchableHighlight
              key={item}
              underlayColor="grey"
              onPress={() => {
                NavigationService.navigate('BookDetail', item);
              }}>
              <BookCard
                url={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoE4lMLbADvLAxUvZf5ZAGvHUZ3KpBWFTW1g&usqp=CAU'
                }
                styleSelect="Large"
                title={item?.book?.title}
                bookTitle={item?.book?.title}
                hideIcon={true}
              />
            </TouchableHighlight>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
      {favoriteBooks != '' ? (
        <FavoriteBooks />
      ) : (
        <View style={{flex: 1}}>
          <Image
            source={images.books.noBookFound}
            style={{
              height: heightPercentageToDP('50%'),
              width: widthPercentageToDP('50%'),
            }}
          />
          <Text style={{margin: 2}}>No bookmarks available</Text>
        </View>
      )}
    </SafeAreaView>
  );
};


export default FavoriteComponent;
