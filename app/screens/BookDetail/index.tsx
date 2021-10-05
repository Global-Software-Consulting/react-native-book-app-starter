import { useIsFocused } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Toast from 'react-native-simple-toast';
import { useDispatch } from 'react-redux';
import getBookDetail from 'services/getBookDetail';
//importing components
import Container from './Container';
import Shimmer from './Shimmer';
import { Books, RouteState } from './types';
const base_url: string = 'https://ebook-application.herokuapp.com/v1/';

const BookDetail: React.FC<RouteState> = (props) => {
    const dispatch = useDispatch();
    const bookId = props.route.params; //getting routed params
    const [bookData, setBookData] = useState<Books>();
    const [isLoading, setIsLoading] = useState(true);
    const isFocussed = useIsFocused();

    //handling back hardware button
    useEffect(() => {
        setIsLoading(true);
        try {
            getBookDetail(parseInt(bookId, 10)).then((response) => {
                if (response.status !== 'success' || response.result !== null) {
                    setBookData(response.result);
                    setIsLoading(false);
                } else {
                    Toast.show('Error loading data', Toast.SHORT);
                }
            });
        } catch {
            Toast.show('Error occured', Toast.SHORT);
        }
    }, [bookId, dispatch, isFocussed]);

    return (
        <View>
            {isLoading || bookData === undefined || bookData === null ? (
                <Shimmer />
            ) : (
                <Container base_url={base_url} books={bookData} />
            )}
        </View>
    );
};

export default BookDetail;
