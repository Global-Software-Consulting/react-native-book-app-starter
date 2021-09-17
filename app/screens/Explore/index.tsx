import { useIsFocused } from '@react-navigation/core';
import { IBookState } from 'models/reducers/fetchBooks';
import { ILoginState } from 'models/reducers/login';
import React, { useEffect, useState } from 'react';
import { Alert, BackHandler, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as appActions from 'store/actions/appActions';
import ExploreComponent from './screen/Container';
import ExploreShimmer from './screen/Shimmer';
const base_url = 'https://ebook-application.herokuapp.com/v1/';

interface IStateReducer {
    appReducer: IBookState;
    loginReducer: ILoginState;
}

const Explore: React.FC = () => {
    //fetching book images from the store
    const books = useSelector((state: IStateReducer) => state.appReducer.detail);
    const isLoading = useSelector((state: IStateReducer) => state.appReducer.isFetching);
    const IsFocused = useIsFocused();
    const userData = useSelector((state: IStateReducer) => state.loginReducer.userData);
    const [username, setUserName] = useState(userData?.firstName + ' ' + userData?.lastName);
    const dispatch = useDispatch();

    useEffect(() => {
        setUserName(userData?.firstName + ' ' + userData?.lastName);
    }, [IsFocused, userData]);

    //handling back hardware button
    useEffect(() => {
        const fetchBookDetails = async () => {
            dispatch(appActions.IFetchBooksRequest('a'));
        };
        const getFavoriteBooks = async () => {
            dispatch(appActions.IFetchFavoriteBooksRequest());
        };

        fetchBookDetails().then(() => {
            getFavoriteBooks();
            //api call
        });

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
    }, [IsFocused, dispatch]);

    return (
        <View>
            {isLoading ? (
                <ExploreShimmer />
            ) : (
                <ExploreComponent name={username} base_url={base_url} books={books} />
            )}
        </View>
    );
};

export default Explore;
