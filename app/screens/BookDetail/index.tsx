import {IBookState} from 'models/reducers/fetchBooks';
import { ILoginState } from 'models/reducers/login';
import NavigationService from 'navigation/NavigationService';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {BackHandler, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as appActions from 'store/actions/appActions';
import i18n from '../../config/Languages/index';
//importing components
import Container from './screen/Container';
import Shimmer from './screen/Shimmer';
import {useStyles} from './styles';
const base_url = 'https://ebook-application.herokuapp.com/v1/';

const initI18n = i18n;

interface IState {
  route: {
    params: string;
  };
}
interface IStateReducer {
  appReducer: IBookState;
  loginReducer:ILoginState;
}

const BookDetail: React.FC<IState> = props => {
  const styles = useStyles(); //theme handling
  const {t, i18n} = useTranslation(); //for translation
  const dispatch = useDispatch();
  const bookId = props.route.params; //getting routed params
  const bookData: {} = useSelector(
    (state: IStateReducer) => state.appReducer.bookDetail,
  );
  const getDetail = async () => {
    dispatch(appActions.IFetchBookDetailRequest(bookId));
  };

  //handling back hardware button
  useEffect(() => {
    getDetail();
  }, []);

  return (
    <View>
      {Object.keys(bookData).length < 1 ? (
        <Shimmer />
      ) : (
        <Container base_url={base_url} books={bookData} />
      )}
    </View>
  );
};

export default BookDetail;
