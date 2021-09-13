//to update the favorites list
import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, Image, TouchableHighlight, View} from 'react-native';
import {Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useStyles} from '../styles';
//importing card component
import BookCard from 'components/BookCard/BookCard';
import images from 'config/images';
import i18n from 'config/Languages/index';
import {useNavigation} from '@react-navigation/native';

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
  const navigation = useNavigation();
  useEffect(() => {
    if (isFocused) setFavoriteBooks(books);
  }, [isFocused, books]);

  const FavoriteBooks = () => {
    return (
      <View>
        <Text style={styles.name}>{t('My Favorites')}</Text>
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
        <View style={styles.favoriteView}>
          <Image source={images.books.noBookFound} style={styles.imageError} />
          <Text style={styles.bookmark}>No bookmarks available</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default FavoriteComponent;
