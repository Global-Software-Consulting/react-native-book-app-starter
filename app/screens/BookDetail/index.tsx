import { useIsFocused } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Toast from 'react-native-simple-toast';
import { useDispatch } from 'react-redux';
import getBookDetail from 'services/getBookDetail';
//importing components
import Container from './Container';
import Shimmer from './Shimmer';
import { Props } from './types';
const base_url = 'https://ebook-application.herokuapp.com/v1/';

interface IState {
    route: {
        params: string;
    };
}

const BookDetail: React.FC<IState> = (props) => {
    const dispatch = useDispatch();
    const bookId = props.route.params; //getting routed params
    const [bookData, setBookData] = useState<Props>();
    const [isLoading, setIsLoading] = useState(true);
    const isFocussed = useIsFocused();

    //handling back hardware button
    useEffect(() => {
        setIsLoading(true);
        try {
            getBookDetail(parseInt(bookId, 10)).then((response) => {
                setBookData(response.result);
                setIsLoading(false);
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
