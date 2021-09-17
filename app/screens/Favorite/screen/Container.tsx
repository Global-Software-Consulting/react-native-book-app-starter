//to update the favorites list
import { useNavigation } from '@react-navigation/native';
//importing card component
import BookCard from 'components/BookCard/BookCard';
import images from 'config/images';
import { IBookState } from 'models/reducers/fetchBooks';
import { ILoginState } from 'models/reducers/login';
import React from 'react';
import {
    FlatList,
    Image,
    RefreshControl,
    ScrollView,
    TouchableHighlight,
    View,
} from 'react-native';
import { Text } from 'react-native-paper';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Toast from 'react-native-simple-toast';
import { useDispatch, useSelector } from 'react-redux';
import NetworkUtils from 'utils/networkUtils';
import { useStyles } from '../styles';
interface Props {
    //     books?: {};
    //     base_url?: string;
    onRefresh: () => void;
}

interface IStateReducer {
    loginReducer: ILoginState;
    appReducer: IBookState;
}

interface IParams {
    id: number;
    bookId: number;
    averageRating: number;
    title: string;
    numberOfPages: string | number;
    shortSummary: string;
    book: {
        title: string;
        id: number;
    };
}

const Container: React.FC<Props> = (props) => {
    //theme handling
    const styles = useStyles();
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const isLoading = useSelector((state: IStateReducer) => state.appReducer.isFetching);
    const favoriteBooks = useSelector((state: IStateReducer) => state.appReducer.favorite);
    const { onRefresh } = props;
    const navigateToDetails = async (params: IParams) => {
        //to check if the internet connection is working
        const isConnected = await NetworkUtils.isNetworkAvailable();
        if (isConnected) {
            navigation.navigate('BookDetail', params);
        } else {
            Toast.show('You are offline', Toast.SHORT);
        }
    };

    const FavoriteBooks = () => {
        return (
            <View>
                <FlatList
                    nestedScrollEnabled={true}
                    numColumns={2}
                    contentContainerStyle={styles.flatList}
                    data={favoriteBooks}
                    renderItem={({ item }) => (
                        <TouchableHighlight
                            key={item}
                            underlayColor="grey"
                            onPress={() => {
                                navigateToDetails(item);
                            }}>
                            <BookCard
                                url={
                                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoE4lMLbADvLAxUvZf5ZAGvHUZ3KpBWFTW1g&usqp=CAU'
                                }
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
            </View>
        );
    };

    return (
        <View style={{ height: heightPercentageToDP('100%') }}>
            <ScrollView
                style={styles.container}
                nestedScrollEnabled
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />}>
                {favoriteBooks.length > 0 ? (
                    <FavoriteBooks />
                ) : (
                    <View style={styles.favoriteView}>
                        <Image source={images.books.noBookFound} style={styles.imageError} />
                        <Text style={styles.bookmark}>No bookmarks available</Text>
                    </View>
                )}
            </ScrollView>
        </View>
    );
};

export default Container;
