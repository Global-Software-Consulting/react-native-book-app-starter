import { useIsFocused } from '@react-navigation/core';
import { IBookState } from 'models/reducers/fetchBooks';
import { ILoginState } from 'models/reducers/login';
import React, { useEffect, useState } from 'react';
import { Alert, BackHandler, TextInput, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import Toast from 'react-native-simple-toast';
import { useDispatch, useSelector } from 'react-redux';
import * as appActions from 'store/actions/appActions';
import { useTheme } from 'react-native-paper';
import { useStyles } from 'screens/Explore/styles';
import NetworkUtils from 'utils/networkUtils';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ExploreComponent from './screen/Container';
import ExploreShimmer from './screen/Shimmer';

const base_url = 'https://ebook-application.herokuapp.com/v1/';
interface IStateReducer {
    appReducer: IBookState;
    loginReducer: ILoginState;
}

const Explore: React.FC = () => {
    //fetching book images from the store
    const books = useSelector((state: IStateReducer) => state.appReducer.books);
    const isLoading = useSelector((state: IStateReducer) => state.loadingReducer.isLoading);
    const [searchText, setSearchText] = useState();
    const IsFocused = useIsFocused();
    const userData = useSelector((state: IStateReducer) => state.loginReducer.user);
    const [username, setUserName] = useState(userData?.firstName + ' ' + userData?.lastName);
    const dispatch = useDispatch();
    const styles = useStyles();
    const { t } = useTranslation();

    const theme = useTheme();
    useEffect(() => {
        setUserName(userData?.firstName + ' ' + userData?.lastName);
        fetchBookDetails().then(() => {
            getFavoriteBooks();
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [IsFocused, userData]);

    //handling back hardware button
    useEffect(() => {
        const backAction = () => {
            Alert.alert('Book App', 'Are you sure you want to exit?', [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel',
                },
                { text: 'YES', onPress: () => BackHandler.exitApp() },
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

        return () => backHandler.remove();
    });

    const fetchBookDetails = async () => {
        dispatch(appActions.getBookRequest(searchText));
        getFavoriteBooks();
    };

    //fetching favorite books
    const getFavoriteBooks = async () => {
        dispatch(appActions.getFavoriteBookRequest());
    };

    return (
        <View>
            {/* Searchbar */}
            <View style={styles.searchView}>
                <TextInput
                    underlineColorAndroid="transparent"
                    placeholder={t('Search Here')}
                    placeholderTextColor={theme.colors.text}
                    onChangeText={(text) => setSearchText(text)}
                    style={styles.searchViewChildren}
                    onEndEditing={() => fetchBookDetails(searchText)}
                />
                <Icon
                    name="find-in-page"
                    size={30}
                    style={styles.searchViewChildren}
                    onPress={() => fetchBookDetails(searchText)}
                />
            </View>
            {isLoading ? (
                <ExploreShimmer />
            ) : (
                <ExploreComponent
                    name={username}
                    base_url={base_url}
                    books={books}
                    onRefresh={fetchBookDetails}
                />
            )}
        </View>
    );
};

export default Explore;
