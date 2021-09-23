//to update the favorites list
import { useNavigation } from '@react-navigation/native';
//importing card component
import BookCard from 'components/BookCard/BookCard';
import images from 'config/images';
import { IStateReducer } from 'models/reducers/index';
import { Props, IParams } from './types';
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
import { useSelector } from 'react-redux';
import { useStyles } from './styles';

const Container: React.FC<Props> = (props) => {
    //theme handling
    const styles = useStyles();
    const navigation = useNavigation();
    const isLoading = useSelector((state: IStateReducer) => state.loadingReducer.isLoading);
    const favoriteBooks = useSelector((state: IStateReducer) => state.appReducer.favorite);
    const { onRefresh } = props;
    const navigateToDetails = async (params: IParams) => {
        //to check if the internet connection is working
        navigation.navigate('BookDetail', params);
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
                                navigateToDetails(item.bookId);
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
                {favoriteBooks?.length > 0 ? (
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
