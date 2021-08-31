import React, {useState} from 'react';
import {View,TouchableOpacity,TouchableHighlight, Image, ScrollView,FlatList} from 'react-native';
import {Text, List} from 'react-native-paper';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import i18n from "../../components/Languages/i18n";

const initI18n = i18n;
const Explore: React.FC = () => {
  const {t, i18n} = useTranslation();

  //state for display name
  const [name, setName] = useState('Jorge')
  const selectedForYouArray = ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png','https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80','https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'];
  const newReleasesArray = ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png','https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80','https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'];
  const trendingArray = ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png','https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80','https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'];
  return (
    
    <ScrollView style={styles.container}>
      <Text style={styles.nameStyle}>Hi {name} </Text>
      <Text style={styles.tagLineStyle}>Let's find something new </Text>

      <View style={styles.horizontalRuler} /> 

      <Text style={styles.listCaptionStyle}>Trending</Text>
      <FlatList
      horizontal
      data={trendingArray}    
      renderItem={({ item, index, separators }) => (
        <TouchableHighlight
        key={item}
        underlayColor='rgba(73,182,77,1,0.9)'
        onPress={() => {}} >
          <View style={styles.bookView}>
            <Image source = {{uri: item}} style={styles.bookTrending} />
          </View>
        </TouchableHighlight>
      )}
      showsHorizontalScrollIndicator={false} 
      style={styles.flatList} />
      
      <View style={styles.horizontalRuler} /> 

      <Text style={styles.listCaptionStyle}>New Releases</Text>
      <FlatList
      horizontal
      data={newReleasesArray}    
      renderItem={({ item, index, separators }) => (
        <TouchableHighlight
        key={item}
        underlayColor='rgba(73,182,77,1,0.9)'
        onPress={() => {}} >
          <View style={styles.bookView}>
            <Image source = {{uri: item}} style={styles.bookGeneral} />
          </View>
        </TouchableHighlight>
      )}
      showsHorizontalScrollIndicator={false} 
      style={styles.flatList} />

<View style={styles.horizontalRuler} /> 

<Text style={styles.listCaptionStyle}>Selected for you</Text>
      <FlatList
      horizontal
      data={selectedForYouArray}    
      renderItem={({ item, index, separators }) => (
        <TouchableHighlight
        key={item}
        underlayColor='rgba(73,182,77,1,0.9)'
        onPress={() => {}} >
          <View style={styles.bookView}>
            <Image source = {{uri: item}} style={styles.bookGeneral} />
          </View>
        </TouchableHighlight>
      )}
      showsHorizontalScrollIndicator={false} 
      style={styles.flatList} />
      
      </ScrollView>
  );
};

export default Explore;
