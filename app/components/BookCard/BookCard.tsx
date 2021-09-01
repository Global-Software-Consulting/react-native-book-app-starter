import React from 'react';
import {View,TouchableOpacity,TouchableHighlight, Image, ScrollView,FlatList, Alert, BackHandler} from 'react-native';
import FastImage from 'react-native-fast-image'
import NavigationService from './../../navigation/NavigationService';
//verctor icons
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import { heightPercentageToDP } from 'react-native-responsive-screen';

interface Props {
    data?: [string];
    navigateTo?: string;
    styleSelect: 'General' | 'Custom';
    isFavorite: boolean;
    }
    const BookCard: React.FC<Props> = ({data,navigateTo, styleSelect, isFavorite}) => 
    {
    return (
<FlatList
      horizontal
      data={data}
      renderItem={({ item, index, separators }) => (
        <TouchableHighlight
        key={item}
        underlayColor='rgba(73,182,77,1,0.9)'
        onPress={() => {NavigationService.navigate(navigateTo)}} >
          <View style={styles.bookView}>
          <FastImage source={{uri:item,
          priority: FastImage.priority.normal,
          }}
          style={styleSelect=='General' ? styles.bookGeneral : styles.bookTrending} />
          <Icon name="heart" size={25} style={styleSelect=='General' ? styles.heartIconGeneral : styles.heartIconTrending} color={isFavorite ? 'red' : 'white'} />
          </View>
        </TouchableHighlight>
      )}
      showsHorizontalScrollIndicator={false} 
      style={styles.flatList} />
      
)
};

export default BookCard;