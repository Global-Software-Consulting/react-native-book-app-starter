import { useNavigation } from '@react-navigation/native';
//importing card component
import BookCard from 'components/BookCard/BookCard';
import images from 'config/images';
import { IAppState } from 'models/reducers/appReducers';
import { Props, IParams } from './types';
import React, { useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from 'screens/Explore/styles';
import * as appActions from 'store/actions/appActions';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const ExploreComponent: React.FC<Props> = (props) => {
    //theme handling
    const styles = useStyles();
    const { t } = useTranslation();
    const theme = useTheme();
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('a');
    const navigation = useNavigation();
    const { name, onRefresh } = props;
    //getting data from store
    const books = useSelector((state: { appReducer: IAppState }) => state.appReducer.books);
    const isLoading = useSelector(
        (state: { loadingReducer: IAppState }) => state.loadingReducer.isLoading,
    );

    const searchBook = (bookName: string) => {
        dispatch(appActions.getBookRequest(bookName));
    };

    const navigateToDetails = async (params: IParams) => {
        navigation.navigate('BookDetail', params);
    };

    return (
        <View style={styles.mainViewSetting}>
            <ScrollView
                nestedScrollEnabled={true}
                style={styles.container}
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />}>
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
                                data={books?.filter((item) => {
                                    return item?.averageRating > 3;
                                })}
                                contentContainerStyle={styles.flatList}
                                renderItem={({ item }) => (
                                    <TouchableHighlight
                                        key={item}
                                        underlayColor="grey"
                                        onPress={() => {
                                            navigateToDetails(item.id);
                                        }}>
                                        <BookCard
                                            url={
                                                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoE4lMLbADvLAxUvZf5ZAGvHUZ3KpBWFTW1g&usqp=CAU'
                                            }
                                            styleSelect="Custom"
                                            bookTitle={item?.title}
                                            book={item}
                                            id={item?.id}
                                        />
                                    </TouchableHighlight>
                                )}
                                showsHorizontalScrollIndicator={false}
                            />
                            <View style={styles.horizontalRuler} />
                            <Text style={styles.listCaption}>{t('New Releases')}</Text>
                            <FlatList
                                horizontal
                                data={books?.filter((item: { averageRating: number }) => {
                                    return item?.averageRating <= 3 && item?.averageRating > 0;
                                })}
                                contentContainerStyle={styles.flatList}
                                renderItem={({ item }) => (
                                    <TouchableHighlight
                                        key={item}
                                        underlayColor="grey"
                                        onPress={() => {
                                            navigateToDetails(item.id);
                                        }}>
                                        <BookCard
                                            url={
                                                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoE4lMLbADvLAxUvZf5ZAGvHUZ3KpBWFTW1g&usqp=CAU'
                                            }
                                            styleSelect="General"
                                            bookTitle={item?.title}
                                            book={item}
                                            id={item?.id}
                                        />
                                    </TouchableHighlight>
                                )}
                                showsHorizontalScrollIndicator={false}
                            />
                            <View style={styles.horizontalRuler} />
                            <Text style={styles.listCaption}>{t('Selected for you')}</Text>
                            <FlatList
                                horizontal
                                data={books?.filter((item: { averageRating: number }) => {
                                    return item?.averageRating === 0;
                                })}
                                contentContainerStyle={styles.flatListLast}
                                renderItem={({ item }) => (
                                    <TouchableHighlight
                                        key={item}
                                        underlayColor="grey"
                                        onPress={() => {
                                            navigateToDetails(item.id);
                                        }}>
                                        <BookCard
                                            url={
                                                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoE4lMLbADvLAxUvZf5ZAGvHUZ3KpBWFTW1g&usqp=CAU'
                                            }
                                            styleSelect="General"
                                            bookTitle={item?.title}
                                            book={item}
                                            id={item?.id}
                                        />
                                    </TouchableHighlight>
                                )}
                                showsHorizontalScrollIndicator={false}
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
