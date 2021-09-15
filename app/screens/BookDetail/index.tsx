import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Alert, BackHandler, ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import i18n from '../../config/Languages/index';
import NavigationService from 'navigation/NavigationService';
import * as appActions from 'store/actions/appActions';
//importing components
import Container from './screen/Container';
import Shimmer from './screen/Shimmer';
import {useStyles} from './styles';
const base_url = 'https://ebook-application.herokuapp.com/v1/';

const initI18n = i18n;
const BookDetail: React.FC = props => {
  const styles = useStyles(); //theme handling
let token = '';
const {t, i18n} = useTranslation(); //for translation

const dispatch = useDispatch();
const bookId = props.route.params; //getting routed params

const bookData = useSelector(state => state.appReducer.bookDetail);
console.log('book id is', bookId);

console.log('book detail is la ', bookData);

const getDetail = async () => {
  dispatch(appActions.IFetchBookDetailRequest(bookId));
};

  const [isLoading, setIsLoading] = useState(false); //state for display name

  //handling back hardware button
  useEffect(() => {
    getDetail();
    const backAction = () => {
      NavigationService.goBack();
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View>
      {bookData.length < 1 ? (
        <Shimmer />
      ) : (
        <Container base_url={base_url} books={bookData} />
      )}
    </View>
  );
};

export default BookDetail;
