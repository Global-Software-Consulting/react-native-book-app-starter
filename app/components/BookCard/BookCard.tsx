import React from 'react';
import {View,TouchableOpacity,TouchableHighlight, Image, ScrollView,FlatList, Alert, BackHandler} from 'react-native';
import {Text} from 'react-native-paper';
//image with placeholder
import FastImage from 'react-native-fast-image';
import NavigationService from './../../navigation/NavigationService';
//verctor icons
import Icon from 'react-native-vector-icons/FontAwesome';
//importing style
import styles from './styles';
//for responsive screen
import { heightPercentageToDP } from 'react-native-responsive-screen';

interface Props {
    url?: string;
    bookTitle?:string;
    styleSelect: 'General' | 'Custom' | 'Large' | 'ExtraLarge';
    isFavorite?: boolean;
    refreshing?: boolean
    authorName?:string;
    }
    const BookCard: React.FC<Props> = ({url, styleSelect, isFavorite, bookTitle, refreshing, authorName}) => 
    {
    return (
      

          <View style={styles.bookView}>
          <FastImage source={{uri:url,
          priority: FastImage.priority.normal,
          }}
          style={styleSelect=='General' ? styles.bookGeneral : styleSelect=='Custom' ? styles.bookTrending : styleSelect=='Large' ? styles.bookLarge : styles.bookExtraLarge} />
          {isFavorite==null ? <View></View> : <Icon name="heart" size={25} style={styleSelect=='General' ? styles.heartIconGeneral : styles.heartIconTrending} color={isFavorite ? 'red' : 'white'} /> }
          <Text style={styleSelect=='General' || styleSelect=='Custom' || styleSelect =='Large' ? styles.textTitle : styles.textTitleEnlarged }>{bookTitle}</Text> 
          <Text style={styleSelect=='General' || styleSelect=='Custom' || styleSelect =='Large' ? styles.authorTitle : styles.authorTitleEnlarged }>{authorName}</Text> 
          </View>

    )};

export default BookCard;