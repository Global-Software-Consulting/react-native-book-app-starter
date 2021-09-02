import React, {useState, useEffect} from 'react';
import {View, Alert, BackHandler,ScrollView} from 'react-native';
import {Text, List} from 'react-native-paper';
//importing card component
import {useStyles} from './styles';
import {useTranslation} from 'react-i18next';
import i18n from "../../components/Languages/i18n";
//importing components
import FavoriteComponent from './components/FavoriteComponent';
import FavoriteShimmer from './components/FavoriteShimmer';
const base_url = "https://ebook-application.herokuapp.com/v1/";

const initI18n = i18n;
const Favorite: React.FC = () => {
//theme handling
const styles = useStyles();

  const {t, i18n} = useTranslation();

  //state for display name
  const [isLoading, setIsLoading] = useState('false')

  //images for Flatlists(Hardcoded)
  const favorites:string[] = ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png','https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80','https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'];

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
    
    <ScrollView style={styles.container}>
      <View style={{flex:1, flexDirection:'row', flexWrap:'wrap'}}>
        <FavoriteComponent base_url={base_url} />

      </View>
      
    </ScrollView>
  );
};

export default Favorite;
