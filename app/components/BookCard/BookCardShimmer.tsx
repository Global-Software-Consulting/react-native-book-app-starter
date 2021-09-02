import React from 'react';
import {View,TouchableOpacity,TouchableHighlight, Image, ScrollView,FlatList, Alert, BackHandler} from 'react-native';
import {Text} from 'react-native-paper';
//for loading screen
import Shimmer from 'react-native-shimmer';
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
    styleSelect: 'General' | 'Custom';
    isFavorite?: boolean;
    refreshing?: boolean
    authorName?:string;
    }
    const BookCardShimmer: React.FC<Props> = ({url, styleSelect, isFavorite, bookTitle, refreshing, authorName}) => 
    {
    return (
          <View style={styles.bookView}>
          <View style={styleSelect=='General' ? styles.bookGeneralShimmer : styles.bookTrendingShimmer} />
          <Text style={styles.textTitleShimmer}></Text> 
          <Text style={styles.textTitleShimmer}></Text> 
          </View>
    )};

export default BookCardShimmer;