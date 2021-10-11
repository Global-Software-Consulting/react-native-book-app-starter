import { useNavigation } from '@react-navigation/native';
//importing card component
import BookCard from 'components/BookCard/BookCard';
import images from 'config/images';
import { Books, IAppState } from 'models/reducers/appReducers';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    FlatList,
    Image,
    RefreshControl,
    ScrollView,
    TouchableHighlight,
    View,
} from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { useStyles } from 'screens/Explore/styles';
import { Props } from './types';
const ExploreComponent: React.FC<Props> = (props) => {
    //theme handling
    const styles = useStyles();
    const { t } = useTranslation();
    const theme = useTheme();
    const navigation = useNavigation();
    const { name, onRefresh } = props;
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
    //getting data from store
    const books = useSelector((state: { appReducer: IAppState }) => state.appReducer.books);
    const isLoading = useSelector(
        (state: { loadingReducer: IAppState }) => state.loadingReducer.isLoading,
    );

    const navigateToDetails = (params: number) => {
        navigation.navigate('BookDetail' as never, params as never);
    };

    const bookList = (item: Books, style: 'General' | 'Custom') => {
        return (
            <TouchableHighlight
                key={item.id}
                underlayColor={theme.colors.highlight}
                onPress={() => {
                    navigateToDetails(item.id);
                }}>
                <BookCard
                    url={generateRandomURL()}
                    styleSelect={style}
                    bookTitle={item?.title}
                    book={item}
                    id={item?.id}
                />
            </TouchableHighlight>
        );
    };

    return (
        <View style={styles.mainViewSetting}>
            <ScrollView
                nestedScrollEnabled={true}
                style={styles.container}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={isLoading}
                        onRefresh={onRefresh}
                        colors={['green', 'yellow']}
                    />
                }>
                <View style={styles.middleView}>
                    <Text style={styles.name}>
                        {t('Hi')} {name}{' '}
                    </Text>
                    <Text style={styles.tagLine}>{t('Lets find something new')}</Text>

                    {books?.length > 0 ? (
                        <View>
                            <View style={styles.horizontalRuler} />
                            <Text style={styles.listCaption}>{t('Trending')}</Text>
                            <FlatList
                                nestedScrollEnabled={true}
                                horizontal
                                data={books?.filter((item: Books) => {
                                    return item.averageRating > 3;
                                })}
                                contentContainerStyle={styles.flatList}
                                renderItem={({ item }) => bookList(item, 'Custom')}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item, index) => 'key' + index}
                            />
                            <View style={styles.horizontalRuler} />
                            <Text style={styles.listCaption}>{t('New Releases')}</Text>
                            <FlatList
                                horizontal
                                data={books?.filter((item: Books) => {
                                    return item.averageRating <= 3 && item.averageRating > 0;
                                })}
                                contentContainerStyle={styles.flatList}
                                renderItem={({ item }) => bookList(item, 'General')}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item, index) => 'key' + index}
                            />
                            <View style={styles.horizontalRuler} />
                            <Text style={styles.listCaption}>{t('Selected for you')}</Text>
                            <FlatList
                                horizontal
                                data={books?.filter((item: Books) => {
                                    return item.averageRating === 0;
                                })}
                                contentContainerStyle={styles.flatListLast}
                                renderItem={({ item }) => bookList(item, 'General')}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item, index) => 'key' + index}
                            />
                        </View>
                    ) : (
                        <View style={styles.favoriteView}>
                            <Image source={images.books.noBookFound} style={styles.imageError} />
                            <Text style={styles.bookmark}>No books found</Text>
                        </View>
                    )}
                </View>
            </ScrollView>
        </View>
    );
};

export default ExploreComponent;
