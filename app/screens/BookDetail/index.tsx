import React, {useState, useEffect} from 'react';
import {View, Alert, BackHandler,ScrollView} from 'react-native';
import {Text, List} from 'react-native-paper';
import NavigationService from './../../navigation/NavigationService';
import { useRoute } from '@react-navigation/native';
import {useStyles} from './styles';
import {useTranslation} from 'react-i18next';
import i18n from "../../components/Languages/i18n";
//importing components
import BookDetailComponent from './components/BookDetailComponent';
import BookDetailShimmer from './components/BookDetailShimmer';
const base_url = "https://ebook-application.herokuapp.com/v1/";

const initI18n = i18n;
const BookDetail: React.FC = (props) => {

const styles = useStyles(); //theme handling

const {t, i18n} = useTranslation();  //for translation

const bookData  = props.route.params; //getting routed params

console.log('here is the data', bookData.bookCategories);
  const [isLoading, setIsLoading] = useState(false)   //state for display name

  //handling back hardware button
  useEffect(() => {
    const backAction = () => {
      NavigationService.goBack();
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    
    <ScrollView style={styles.container}>
      {isLoading ? <BookDetailShimmer /> : <BookDetailComponent base_url={base_url} books={bookData}/>}
    </ScrollView>
  );
};

export default BookDetail;
