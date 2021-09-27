//to update the favorites list
import { useNavigation } from '@react-navigation/native';
//importing card component
import BookCard from 'components/BookCard/BookCard';
import images from 'config/images';
import { reducerState } from 'models/reducers/index';
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
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';
import { useStyles } from './styles';
import { useDeviceOrientation } from '@react-native-community/hooks';

const Container: React.FC<Props> = (props) => {
    //theme handling
    const styles = useStyles();
    const orientation = useDeviceOrientation();
    const navigation = useNavigation();
    const isLoading = useSelector((state: reducerState) => state.loadingReducer.isLoading);
    const favoriteBooks = useSelector((state: reducerState) => state.appReducer.favorite);
    const { onRefresh } = props;
    const navigateToDetails = async (params: IParams) => {
        //to check if the internet connection is working
        navigation.navigate('BookDetail', params);
    };

    const FavoriteBooks = () => {
        return (
            <FlatList
                nestedScrollEnabled={true}
                numColumns={orientation.portrait ? 2 : 4}
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
