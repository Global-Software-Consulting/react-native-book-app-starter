import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
//importing card component
import BookCard from 'components/BookCard/BookCard';
import images from 'config/images';
import { ReducerState } from 'models/reducers/index';
import { theme } from 'native-base';
import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Image,
    RefreshControl,
    ScrollView,
    TouchableHighlight,
    View,
} from 'react-native';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { useStyles } from './styles';
import { IParams, Props } from './types';

const Container: React.FC<Props> = (props) => {
    const dummyImages = [
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sad-romance-kindle-book-cover-flyer-template-539b5fdf2dd2f6602c25ce81fbb5d877.jpg?ts=1589326539',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO4yGwkz128dpVHBztwERbm6Z6kIXwQ03V0A&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQB-3-cJ6tpQ6cFUjCach0R1dTiXdhXI0AtA&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaVjRvjIZAO6XIsd0eHS22Q949ke7r-KZFg&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkIVlYNBoYdfq1FGWs_dx_k8Irvjmdu64p7A&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwor6J4qPx1WWN27GYiZEFP-NAoWSstn-YrQ&usqp=CAU',
    ];

    const generateRandomURL = () => {
        const number = Math.random() * 6;
        const index = Math.floor(number);
        return dummyImages[index];
    };
    //theme handling
    const styles = useStyles();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const navigation = useNavigation();
    const isLoading = useSelector((state: ReducerState) => state.loadingReducer.isLoading);
    const [columns, setColumns] = useState<number>(2);
    const favoriteBooks = useSelector((state: ReducerState) => state.appReducer.favorite);
    const { onRefresh } = props;
    const navigateToDetails = async (params: IParams) => {
        //to check if the internet connection is working
        navigation.navigate('BookDetail', params);
    };
    const bookList = (item) => {
        return (
            <TouchableHighlight
                key={item}
                underlayColor="#FAF9F6"
                onPress={() => {
                    navigateToDetails(item.bookId);
                }}>
                <BookCard
                    url={generateRandomURL()}
                    styleSelect="Large"
                    id={item?.book.id}
                    bookTitle={item?.book?.title}
                    book={favoriteBooks}
                    hideIcon={false}
                />
            </TouchableHighlight>
        );
    };
    return (
        <View style={styles.mainView}>
            {favoriteBooks?.length > 0 ? (
                <FlatList
                    numColumns={windowHeight > windowWidth ? 2 : 4}
                    key={windowHeight > windowWidth ? 2 : 4}
                    data={favoriteBooks}
                    style={styles.flatList}
                    onRefresh={onRefresh}
                    refreshing={isLoading}
                    renderItem={({ item }) => bookList(item)}
                    showsHorizontalScrollIndicator={false}
                />
            ) : (
                <ScrollView contentContainerStyle={styles.favoriteView}>
                    <Image source={images.books.noBookFound} style={styles.imageError} />
                    <Text style={styles.bookmark}>No bookmarks available</Text>
                </ScrollView>
            )}
        </View>
    );
};

export default Container;
