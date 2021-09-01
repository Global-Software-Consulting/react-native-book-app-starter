import React, {useState, useEffect} from 'react';
import {View,TouchableOpacity,TouchableHighlight, Image, ScrollView,FlatList, Alert, BackHandler} from 'react-native';
import {Text, List} from 'react-native-paper';
//importing card component
import BookCard from './../../components/BookCard/BookCard';
import {useStyles} from './styles';
import {useTranslation} from 'react-i18next';
import i18n from "../../components/Languages/i18n";

const initI18n = i18n;
const Explore: React.FC = () => {
  const {t, i18n} = useTranslation();

  //state for display name
  const [name, setName] = useState('Jorge')

  //images for Flatlists(Hardcoded)
  const selectedForYouArray:string[] = ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png','https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80','https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'];
  const newReleasesArray:string[] = ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png','https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80','https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'];
  const trendingArray:string[] = ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png','https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80','https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'];

//theme handling
const styles = useStyles();

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
      <Text style={styles.nameStyle}>Hi {name} </Text>
      <Text style={styles.tagLineStyle}>Let's find something new </Text>

      <View style={styles.horizontalRuler} /> 

      <Text style={styles.listCaptionStyle}>Trending</Text>
      <FlatList horizontal
       data={trendingArray}
       contentContainerStyle={styles.flatList}
       renderItem={({ item, index }) => (
       <TouchableHighlight
        key={item}
        underlayColor='grey'
        onPress={()=>{}}  >
          <BookCard url={item} isFavorite={true} styleSelect='Custom' />
      </TouchableHighlight>
      )}
  showsHorizontalScrollIndicator={false}    
/>

      <View style={styles.horizontalRuler} /> 

      <Text style={styles.listCaptionStyle}>New Releases</Text>
      <FlatList horizontal
       data={newReleasesArray}
       contentContainerStyle={styles.flatList}
       renderItem={({ item, index }) => (
       <TouchableHighlight
        key={item}
        underlayColor='grey'
        onPress={()=>{}}  >
          <BookCard url={item} isFavorite={false} styleSelect='General' />
      </TouchableHighlight>
      )}
      showsHorizontalScrollIndicator={false}    
    />

      <View style={styles.horizontalRuler} /> 

      <Text style={styles.listCaptionStyle}>Selected for you</Text>
      <FlatList horizontal
       data={selectedForYouArray}
       contentContainerStyle={styles.flatListLast}
       renderItem={({ item, index }) => (
       <TouchableHighlight
        key={item}
        underlayColor='grey'
        onPress={()=>{}}  >
          <BookCard url={item} isFavorite={false} styleSelect='General' />
      </TouchableHighlight>
      )}
      showsHorizontalScrollIndicator={false}    
    />
    
    </ScrollView>
  );
};

export default Explore;
