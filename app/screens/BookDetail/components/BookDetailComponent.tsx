import React, {useState, useEffect} from 'react';
import {View,TouchableHighlight,FlatList, Alert, BackHandler} from 'react-native';
import {Text} from 'react-native-paper';
//importing card component
import BookCard from './../../../components/BookCard/BookCard';
import {useStyles} from '../styles'
import { widthPercentageToDP } from 'react-native-responsive-screen';

interface Props {
  books?:[];
 base_url?:string;
}

const BookDetailComponent: React.FC<Props> = ({books, base_url}) => 
    {
//theme handling
const styles = useStyles();
const author = books.bookAuthors[0].author.name;
const genre = books.bookCategories[0].category.title;
const launched = books.createdAt;

  return (
<View>
<BookCard styleSelect='ExtraLarge' bookTitle={books.title} authorName={author} url='https://edit.org/images/cat/book-covers-big-2019101610.jpg' />

<View style={styles.horizontalRuler} /> 


<View style={{flexDirection:'row', marginTop:25, justifyContent:'space-evenly'}}>
  <View style={{flexDirection:'column'}}>
  <Text style={{fontWeight:'300',fontSize:15}}>Genre</Text>
  <Text style={{fontWeight:'bold',fontSize:15, maxWidth:widthPercentageToDP('25%')}}>{genre}</Text>

  </View>
  
  <View style={{flexDirection:'column'}}>
  <Text style={{fontWeight:'300',fontSize:15}}>Launched</Text>
  <Text style={{fontWeight:'bold',fontSize:20, maxWidth:widthPercentageToDP('25%')}}>{launched.substring(0, 10)}</Text>


  </View>

  <View style={{flexDirection:'column'}}>
  <Text style={{fontWeight:'300',fontSize:15}}>Size</Text>
  <Text style={{fontWeight:'bold',fontSize:20, maxWidth:widthPercentageToDP('25%')}}>448 Pages</Text>

  </View>


</View>

<View style={{flexDirection:'column', margin:30}}>
  <Text style={{fontWeight:'300',fontSize:15, marginBottom:10}}>Synopse</Text>
  <Text style={{fontWeight:'400',fontSize:15, marginBottom:30}}>{books.shortSummary}</Text>
  </View>
</View>
    )};

export default BookDetailComponent;
