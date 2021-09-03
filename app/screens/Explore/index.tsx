import React, {useState, useEffect} from 'react';
import {View,TouchableOpacity,TouchableHighlight, Image, ScrollView,FlatList, Alert, BackHandler,RefreshControl} from 'react-native';
import {Text, List} from 'react-native-paper';
import { useDispatch, useSelector} from 'react-redux';
import fetchBookSaga from './../../store/sagas/fetchBookSaga';
import * as fetchActions from './../../store/actions/appActions';
//importing card component
import {useStyles} from './styles';
import {useTranslation} from 'react-i18next';
import i18n from "../../components/Languages/i18n";
import fetchBookAsync from './../../store/sagas/fetchBookSaga';
import { State } from 'react-native-gesture-handler';
import ExploreShimmer from './components/ExploreShimmer';
import ExploreComponent from './components/ExploreComponent';
const base_url = "https://ebook-application.herokuapp.com/v1/";
const initI18n = i18n;
const Explore: React.FC = () => {
  const {t, i18n} = useTranslation();

  //fetching book images from the store
const books = useSelector((state) => state.bookFetchReducer.detail);
const isLoading = useSelector((state) => state.bookFetchReducer.isFetching);

console.log('books are', isLoading);

  //state for display name
  const [name, setName] = useState('Jorge')

  //images for Flatlists(Hardcoded)
  const sampleArr:any[] = ['a'];


//theme handling
const styles = useStyles();
const dispatch = useDispatch();

const fetchBookDetails = async({}) => {
  dispatch(fetchActions.IFetchBooksRequest());
}

  //handling back hardware button
  useEffect(() => {
    //api call
    fetchBookDetails()
    const backAction = () => {
      Alert.alert("Book App", "Are you sure you want to exit?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    
    <ScrollView style={styles.container}  refreshControl={
      <RefreshControl
        refreshing={isLoading}
        onRefresh={fetchBookDetails}
      />
    } >
     {isLoading ?  <ExploreShimmer /> : <ExploreComponent name='Jorge' base_url={base_url} books={books} />}
    
    </ScrollView>
  );
};

export default Explore;
