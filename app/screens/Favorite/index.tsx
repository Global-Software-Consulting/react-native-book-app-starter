import React, {useEffect} from 'react';
import {
  View,
  Alert,
  BackHandler,
  ScrollView,
  RefreshControl,
} from 'react-native';
//importing card component
import {useStyles} from './styles';
import {useTranslation} from 'react-i18next';
import i18n from 'components/Languages/i18n';
import {useSelector, useDispatch} from 'react-redux';
//importing components
import Shimmer from './screen/Shimmer';
import Container from './screen/Container';
import * as appActions from 'store/actions/appActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/core';
import {IBookState} from 'models/reducers/fetchBooks';
import {ILoginState} from 'models/reducers/login';
const base_url = 'https://ebook-application.herokuapp.com/v1/';
const initI18n = i18n;

interface IAppReducer {
  loginReducer: ILoginState;
  appReducer: IBookState;
}
const Favorite: React.FC = () => {
  //theme handling
  const styles = useStyles();
  const isFocused = useIsFocused();
  const favoriteBooks = useSelector(
    (state: IAppReducer) => state.appReducer.favorite,
  );
  const isLoading = useSelector(
    (state: IAppReducer) => state.appReducer.isFetching,
  );
  //const [favoriteBookss, setFavoriteBookss] = useState(favoriteBooks);

  const {t, i18n} = useTranslation();

  const dispatch = useDispatch();

  //fetching favorite books
  const getFavoriteBooks = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        dispatch(appActions.IFetchFavoriteBooksRequest());
      } else {
        Alert.alert('Book App', 'Please login again');
      }
    } catch (e) {}
  };

  useEffect(() => {
    getFavoriteBooks();
  }, [isFocused]);

  //handling back hardware button
  useEffect(() => {
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
  }, []);

  return (
    <View>
      {isLoading ? (
        <Shimmer />
      ) : (
        <View style={styles.containerView}>
          <Container base_url={base_url} books={favoriteBooks} />
        </View>
      )}
    </View>
  );
};

export default Favorite;
