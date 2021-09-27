//to update the favorites list
import { useNavigation } from '@react-navigation/native';
//importing card component
import BookCard from 'components/BookCard/BookCard';
import images from 'config/images';
import { reducerState } from 'models/reducers/index';
import { Props, IParams } from './types';
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
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';
import { useStyles } from './styles';
import { useDeviceOrientation } from '@react-native-community/hooks';

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
    const orientation = useDeviceOrientation();
    const navigation = useNavigation();
    const isLoading = useSelector((state: reducerState) => state.loadingReducer.isLoading);
    const [columns, setColumns] = useState<number>();
    const favoriteBooks = useSelector((state: reducerState) => state.appReducer.favorite);
    const { onRefresh } = props;
    const navigateToDetails = async (params: IParams) => {
        //to check if the internet connection is working
        navigation.navigate('BookDetail', params);
    };

    useEffect(() => {
        if (orientation.portrait) {
            setColumns(2);
        } else setColumns(3);
    }, [orientation]);
    const FavoriteBooks = () => {
        return (
            <FlatList
                nestedScrollEnabled={true}
                numColumns={columns}
                key={columns}
                contentContainerStyle={styles.flatList}
                data={favoriteBooks}
                renderItem={({ item }) => (
                    <TouchableHighlight
                        key={item}
                        underlayColor="grey"
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
                )}
                showsHorizontalScrollIndicator={false}
            />
        );
    };

    return (
        <ScrollView
            nestedScrollEnabled
            contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
            refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />}>
            {favoriteBooks?.length > 0 ? (
                <FavoriteBooks />
            ) : (
                <View style={styles.favoriteView}>
                    <Image source={images.books.noBookFound} style={styles.imageError} />
                    <Text style={styles.bookmark}>No bookmarks available</Text>
                </View>
            )}
        </ScrollView>
    );
};

export default Container;
