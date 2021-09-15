import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  Alert,
  BackHandler,
  RefreshControl,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as appActions from 'store/actions/appActions';
//importing card component
import {useStyles} from './styles';
import {useTranslation} from 'react-i18next';
import i18n from 'components/Languages/i18n';
import ExploreShimmer from './screen/Shimmer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ExploreComponent from './screen/Container';
import * as loginAction from 'store/actions/loginActions';
import {useIsFocused} from '@react-navigation/core';
const base_url = 'https://ebook-application.herokuapp.com/v1/';
const initI18n = i18n;
const Explore: React.FC = () => {
  const {t, i18n} = useTranslation();

  //fetching book images from the store
  const books = useSelector(state => state.appReducer.detail);
  const isLoading = useSelector(state => state.appReducer.isFetching);
  const token = useSelector(state => state.loginReducer.token);
  const IsFocused = useIsFocused();
  const favoriteBooks = useSelector(state => state.appReducer.favorite);
  const [errorExists, setErrorExists] = useState(false);

  //state for display name
  const [name, setName] = useState('Jorge');

  //images for Flatlists(Hardcoded)
  const sampleArr: any[] = ['a'];

  //theme handling
  const styles = useStyles();
  const dispatch = useDispatch();

  const fetchBookDetails = async () => {
    dispatch(appActions.IFetchBooksRequest('a'));
  };
  const getFavoriteBooks = async () => {
    dispatch(appActions.IFetchFavoriteBooksRequest());
  };

  //fetching favorite books

  //handling back hardware button
  useEffect(() => {
    fetchBookDetails().then(() => {
      getFavoriteBooks();
      //api call
    });

    const backAction = () => {
      Alert.alert('Book App', 'Are you sure you want to exit?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [IsFocused]);

  return (
    <View>
      {isLoading ? (
        <ExploreShimmer />
      ) : (
        <ExploreComponent name="Jorge" base_url={base_url} books={books} />
      )}
    </View>
  );
};

export default Explore;
