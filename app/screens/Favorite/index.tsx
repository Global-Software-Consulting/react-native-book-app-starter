import React, {useState, useEffect} from 'react';
import {
  View,
  Alert,
  BackHandler,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {Text, List} from 'react-native-paper';
//importing card component
import {useStyles} from './styles';
import {useTranslation} from 'react-i18next';
import i18n from '../../components/Languages/i18n';
import {useSelector, useDispatch} from 'react-redux';
//importing components
import FavoriteComponent from './components/FavoriteComponent';
import FavoriteShimmer from './components/FavoriteShimmer';
import {useFocusEffect} from '@react-navigation/native';
import * as appActions from './../../store/actions/appActions';
import {getDrawerStatusFromState} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
const base_url = 'https://ebook-application.herokuapp.com/v1/';

const initI18n = i18n;
const Favorite: React.FC = () => {
  //theme handling
  const styles = useStyles();

  const favoriteBooks = useSelector(state => state.bookFetchReducer.favorite);
  const isLoading = useSelector(state => state.bookFetchReducer.isFetching);
  //const [favoriteBookss, setFavoriteBookss] = useState(favoriteBooks);

  const {t, i18n} = useTranslation();

  const dispatch = useDispatch();

  //fetching favorite books
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        dispatch(appActions.IFetchFavoriteBooksRequest(value));
      } else {
        Alert.alert('Book App', 'Please login again');
      }
    } catch (e) {}
  };

  //handling back hardware button
  useEffect(() => {
    getData();
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
    <ScrollView
      style={styles.container}
      nestedScrollEnabled
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={getData} />
      }>
      {isLoading ? (
        <FavoriteShimmer />
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'stretch',
          }}>
          <FavoriteComponent base_url={base_url} books={favoriteBooks} />
        </View>
      )}
    </ScrollView>
  );
};

export default Favorite;
