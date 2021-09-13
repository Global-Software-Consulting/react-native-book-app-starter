import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Alert, BackHandler, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import i18n from '../../config/Languages/index';
import NavigationService from 'navigation/NavigationService';
import * as appActions from 'store/actions/appActions';
//importing components
import BookDetailComponent from './screen/Shimmer';
import BookDetailShimmer from './screen/BookDetailShimmer';
import {useStyles} from './styles';
const base_url = 'https://ebook-application.herokuapp.com/v1/';

const initI18n = i18n;
const BookDetail: React.FC = props => {
  const styles = useStyles(); //theme handling

  const {t, i18n} = useTranslation(); //for translation

  const dispatch = useDispatch();
  const bookId = props.route.params; //getting routed params

  const bookData = useSelector(state => state.appReducer.bookDetail);

  console.log('book detail is ', bookData);

  const getTokenAndGetBookDetail = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        dispatch(
          appActions.IFetchBookDetailRequest({id: bookId, token: value}),
        );
      } else {
        Alert.alert('Book App', 'Please login again');
      }
    } catch (e) {}
  };

  const [isLoading, setIsLoading] = useState(false); //state for display name

  //handling back hardware button
  useEffect(() => {
    getTokenAndGetBookDetail();
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
    <ScrollView style={styles.container}>
      {isLoading ? (
        <BookDetailShimmer />
      ) : (
        <BookDetailComponent base_url={base_url} books={bookData} />
      )}
    </ScrollView>
  );
};

export default BookDetail;
