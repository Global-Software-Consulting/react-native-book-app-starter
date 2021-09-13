import React, {useState, useEffect} from 'react';
import {View,TouchableHighlight,FlatList, Alert, BackHandler} from 'react-native';
import {Text} from 'react-native-paper';
//importing card component
import BookCard from './../../../components/BookCard/BookCard';
import {useStyles} from '../styles'
import { widthPercentageToDP } from 'react-native-responsive-screen';
import i18n from './../../../config/Languages/index';
import {useTranslation} from 'react-i18next';

interface Props {
  books?: [];
  base_url?: string;
}
const initI18n = i18n;

const BookDetailComponent: React.FC<Props> = ({books, base_url}) => {
  //theme handling
  const styles = useStyles();
  var author = 'Dummy author';
  var genre = 'Dummy Genre';
  var pages = books?.numberOfPages;
  var launched = books?.createdAt;
  const {t, i18n} = useTranslation();

  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
  const toggleNumberOfLines = () => {
    //To toggle the show text or hide it
    setTextShown(!textShown);
  };

  return (
    <View style={{marginBottom: 5}}>
      <BookCard
        styleSelect="ExtraLarge"
        bookTitle={books.title}
        authorName={author}
        hideIcon={true}
        url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoE4lMLbADvLAxUvZf5ZAGvHUZ3KpBWFTW1g&usqp=CAU"
      />

      <View style={styles.horizontalRuler} />

      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'space-evenly',
        }}>
        <View style={{flexDirection: 'column'}}>
          <Text style={{fontWeight: '300', fontSize: 15}}>{t('Genre')}</Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              maxWidth: widthPercentageToDP('25%'),
            }}>
            {genre}
          </Text>
        </View>

        <View style={{flexDirection: 'column'}}>
          <Text style={{fontWeight: '300', fontSize: 15}}>
            {' '}
            {t('Launched')}
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              maxWidth: widthPercentageToDP('25%'),
            }}>
            {launched.substring(0, 10)}
          </Text>
        </View>

        <View style={{flexDirection: 'column'}}>
          <Text style={{fontWeight: '300', fontSize: 15}}>{t('Size')}</Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              maxWidth: widthPercentageToDP('25%'),
            }}>
            {pages} {t(' pages')}
          </Text>
        </View>
      </View>

      <View style={{flexDirection: 'column', margin: 30}}>
        <Text style={{fontWeight: '300', fontSize: 15, marginBottom: 10}}>
          {t('Synopse')}
        </Text>
        <Text
          style={{fontWeight: '400', fontSize: 15, marginBottom: 30}}
          onPress={toggleNumberOfLines}
          numberOfLines={textShown ? undefined : 2}>
          {books.shortSummary}
        </Text>
      </View>
    </View>
  );
};

export default BookDetailComponent;
