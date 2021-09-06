import React, {useState, useEffect} from 'react';
import {View, Alert, BackHandler,ScrollView} from 'react-native';
import {Text, List} from 'react-native-paper';
//importing card component
import {useStyles} from './styles';
import {useTranslation} from 'react-i18next';
import i18n from "../../components/Languages/i18n";
import { useSelector } from 'react-redux';
//importing components
import FavoriteComponent from './components/FavoriteComponent';
import FavoriteShimmer from './components/FavoriteShimmer';
import { useFocusEffect } from '@react-navigation/native';

const base_url = "https://ebook-application.herokuapp.com/v1/";

const initI18n = i18n;
const Favorite: React.FC = () => {
//theme handling
const styles = useStyles();

const favoriteBooks = useSelector((state) => state.bookFetchReducer.favorite);
//const [favoriteBookss, setFavoriteBookss] = useState(favoriteBooks);


  const {t, i18n} = useTranslation();

  //state for display name
  const [isLoading, setIsLoading] = useState('false')


  //handling back hardware button
  useEffect(() => {
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
    
    <ScrollView style={styles.container} nestedScrollEnabled>
      <View style={{flex:1, flexDirection:'row', flexWrap:'wrap',justifyContent:'space-around',alignItems:'stretch'}}>
        <FavoriteComponent base_url={base_url} books={favoriteBooks} />

      </View>
      
    </ScrollView>
  );
};

export default Favorite;
