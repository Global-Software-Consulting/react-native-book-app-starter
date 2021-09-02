import React, {useState, useEffect} from 'react';
import {View,TouchableHighlight,FlatList, Alert, BackHandler} from 'react-native';
import {Text} from 'react-native-paper';
//importing card component
import BookCard from './../../../components/BookCard/BookCard';
import {useStyles} from '../styles'

interface Props {
  books?:[];
 base_url?:string;
}

const FavoriteComponent: React.FC<Props> = ({books, base_url}) => 
    {
//theme handling
const styles = useStyles();

  return (
<View>
      <Text style={styles.nameStyle}>My Favorites</Text>
      <FlatList 
      numColumns={2}
       data={[0,0,0,0,0,0]}
       contentContainerStyle={styles.flatList}
       renderItem={({ item, index }) => (
       <TouchableHighlight
        key={item}
        underlayColor='grey'
        onPress={()=>{}}  >
          <BookCard url={'https://edit.org/images/cat/book-covers-big-2019101610.jpg'} styleSelect='Custom' bookTitle={'Dummy Book'} authorName={'Hannad Ahmad'} />
      </TouchableHighlight>
      )}
  showsHorizontalScrollIndicator={false}    
/>
</View>
    )};

export default FavoriteComponent;
