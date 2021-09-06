import React, {useState, useEffect} from 'react';
import {View,TouchableHighlight,FlatList, Alert, BackHandler} from 'react-native';
import {Text} from 'react-native-paper';
//importing card component
import BookCard from './../../../components/BookCard/BookCard';
import {useStyles} from '../styles'
import {useSelector} from 'react-redux'
//to update the favorites list
import { useIsFocused } from '@react-navigation/native';
import NavigationService from './../../../navigation/NavigationService';

interface Props {
  books?:[];
 base_url?:string;
}

const FavoriteComponent: React.FC<Props> = ({books, base_url}) => 
    {
//theme handling
const styles = useStyles();

const [favoriteBooks, setFavoriteBooks] = useState(books);
const isFocused = useIsFocused()

useEffect(()=>{
 if(isFocused) setFavoriteBooks(books)
},[isFocused,books])

  return (
<View>
      <Text style={styles.nameStyle}>My Favorites</Text>
      <FlatList 
      numColumns={2}
      contentContainerStyle={styles.flatList}
       data={favoriteBooks}
       renderItem={({ item, index }) => (
       <TouchableHighlight
        key={item}
        underlayColor='grey'
        onPress={()=>{NavigationService.navigate('BookDetail',item)}}  >
          <BookCard url={'https://edit.org/images/cat/book-covers-big-2019101610.jpg'} styleSelect='Large' bookTitle={item.title} authorName={item.bookAuthors[0].author.name} hideIcon={true}/>
      </TouchableHighlight>
      )}
  showsHorizontalScrollIndicator={false}    
/>
</View>
    )};

export default FavoriteComponent;
