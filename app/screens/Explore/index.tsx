import { useIsFocused } from '@react-navigation/core';
import SearchBar from 'components/SearchBar';
import { IStateReducer } from 'models/reducers/index';
import React, { useEffect, useState } from 'react';
import { Alert, BackHandler, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import * as appActions from 'store/actions/appActions';
import ExploreComponent from './Container';
import ExploreShimmer from './Shimmer';

const Explore: React.FC = () => {
    //fetching book images from the store
    const books = useSelector((state: IStateReducer) => state.appReducer.books);
    const isLoading = useSelector((state: IStateReducer) => state.loadingReducer.isLoading);
    const isFocused = useIsFocused();
    const userData = useSelector((state: IStateReducer) => state.loginReducer.user);
    const [username, setUserName] = useState(userData?.firstName + ' ' + userData?.lastName);
    const dispatch = useDispatch();
    const theme = useTheme();

    useEffect(() => {
        setUserName(userData?.firstName + ' ' + userData?.lastName);
        if (isFocused) {
            fetchBookDetails();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFocused, userData]);

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
        dispatch(appActions.getBookRequest('a'));
    };

    return (
        <View style={{ backgroundColor: theme.colors.background }}>
            <SearchBar />
            {isLoading ? (
                <ExploreShimmer />
            ) : (
                <ExploreComponent name={username} books={books} onRefresh={fetchBookDetails} />
            )}
        </View>
    );
};

export default Explore;
