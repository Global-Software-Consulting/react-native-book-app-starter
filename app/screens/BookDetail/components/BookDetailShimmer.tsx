import React, {useState, useEffect} from 'react';
import {View,TouchableHighlight,FlatList, Alert, BackHandler} from 'react-native';
import {Text} from 'react-native-paper';
//importing card component
import BookCardShimmer from './../../../components/BookCard/BookCardShimmer';
import {useStyles} from '../styles';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';


interface Props {
  books?:[];
 base_url?:string;
}

const BookDetailShimmer: React.FC<Props> = ({books, base_url}) => 
    {
//theme handling
const styles = useStyles();

  return (
<View>
<BookCardShimmer />

<View style={styles.horizontalRuler} /> 


<View style={{margin:20, height:heightPercentageToDP('20'),width:widthPercentageToDP('80'),alignSelf:'center', backgroundColor:'#E7E5E7'}}>
</View>

<View style={{margin:20, height:heightPercentageToDP('20'),width:widthPercentageToDP('80'),alignSelf:'center', backgroundColor:'#E7E5E7'}}>
</View>

</View>
    )};

export default BookDetailShimmer;
