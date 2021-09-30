import { useIsFocused } from '@react-navigation/core';
import { ReducerState } from 'models/reducers/index';
import React, { useEffect, useState } from 'react';
import { Alert, BackHandler, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as appActions from 'store/actions/appActions';
import Container from './Container';
//importing components
import Shimmer from './Shimmer';
//importing card component

const base_url: string = 'https://ebook-application.herokuapp.com/v1/';

const Favorite: React.FC = () => {
    //theme handling
    const isFocused = useIsFocused();
    const favoriteBooks = useSelector((state: ReducerState) => state.appReducer.favorite);
    const isLoading = useSelector((state: ReducerState) => state.loadingReducer.isLoading);
    const [favoriteBookss, setFavoriteBookss] = useState(favoriteBooks);
    const dispatch = useDispatch();

    //fetching favorite books
    const getFavoriteBooks = async () => {
        dispatch(appActions.getFavoriteBookRequest());
    };
    useEffect(() => {
        if (isFocused) {
            getFavoriteBooks();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFocused]);

    useEffect(() => {
        setFavoriteBookss(favoriteBooks);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [favoriteBooks]);

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
    }, []);

    return (
        <View>
            {isLoading ? (
                <Shimmer />
            ) : (
                <Container
                    base_url={base_url}
                    books={favoriteBookss}
                    onRefresh={getFavoriteBooks}
                />
            )}
        </View>
    );
};

export default Favorite;
