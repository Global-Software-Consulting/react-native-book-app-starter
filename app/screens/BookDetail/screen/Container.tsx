import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {useStyles} from '../styles';
import BookCard from '../../../components/BookCard/BookCard';
import i18n from '../../../config/Languages';
import {heightPercentageToDP} from 'react-native-responsive-screen';

//importing card component
interface Props {
  books?: [];
  base_url?: string;
}
const initI18n = i18n;

const Container: React.FC<Props> = ({books, base_url}) => {
  //theme handling
  const styles = useStyles();
  var author = books.bookAuthors[0].author.name;
  var genre = 'Dummy Genre';
  var pages = books.numberOfPages;
  var launched = books.createdAt;
  var title = books.title;
  const {t, i18n} = useTranslation();

  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
  const toggleNumberOfLines = () => {
    //To toggle the show text or hide it
    setTextShown(!textShown);
  };
  console.log('Book detailo', books);
  return (
    <View style={styles.main}>
      <ScrollView>
        <BookCard
          styleSelect="ExtraLarge"
          bookTitle={title}
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
            <Text style={styles.dynamicLaunchedText}>
              {launched.substring(0, 9)}
            </Text>
          </View>

          <View style={styles.pagesSubView}>
            <Text style={styles.sizeText}>{t('Size')}</Text>
            <Text style={styles.dynamicSize}>
              {pages}
              {t(' pages')}
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
      </ScrollView>
    </View>
  );
};

export default Container;
