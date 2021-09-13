import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {useStyles} from '../styles';
import BookCard from '../../../components/BookCard/BookCard';
import i18n from '../../../config/Languages';

//importing card component
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

      <View style={styles.mainView}>
        <View style={styles.subView}>
          <Text style={styles.genreText}>{t('Genre')}</Text>
          <Text style={styles.dynamicGenreText}>{genre}</Text>
        </View>

        <View style={styles.launchedSubView}>
          <Text style={styles.launchedText}> {t('Launched')}</Text>
          <Text style={styles.dynamicLaunchedtext}>
            {/* {launched.substring(0, 10)} */}
          </Text>
        </View>

        <View style={styles.pagesSubView}>
          <Text style={styles.sizeText}>{t('Size')}</Text>
          <Text style={styles.dynamicSize}>
            {pages} {t(' pages')}
          </Text>
        </View>
      </View>

      <View style={styles.synopseView}>
        <Text style={styles.synopseText}>{t('Synopse')}</Text>
        <Text
          style={styles.dynamicSynopse}
          onPress={toggleNumberOfLines}
          numberOfLines={textShown ? undefined : 2}>
          {books.shortSummary}
        </Text>
      </View>
    </View>
  );
};

export default BookDetailComponent;
