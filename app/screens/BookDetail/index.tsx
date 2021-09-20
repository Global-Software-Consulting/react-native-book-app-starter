import { IBookState } from 'models/reducers/fetchBooks';
import { ILoginState } from 'models/reducers/login';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as appActions from 'store/actions/appActions';
//importing components
import Container from './screen/Container';
import Shimmer from './screen/Shimmer';
import { useIsFocused } from '@react-navigation/core';
const base_url = 'https://ebook-application.herokuapp.com/v1/';

interface IState {
    route: {
        params: string;
    };
}
interface IStateReducer {
    appReducer: IBookState;
    loginReducer: ILoginState;
}
interface IData {
    id: number;
    averageRating: number;
    title: string;
    numberOfPages: string | number;
    shortSummary: string;
    createdAt: string;
}
const BookDetail: React.FC<IState> = (props) => {
    const dispatch = useDispatch();
    const bookId = props.route.params; //getting routed params
    const bookData: IData = useSelector((state: IStateReducer) => state.appReducer.bookDetail);
    const isLoading: boolean = useSelector((state: IStateReducer) => state.appReducer.isFetching);
    const isFocussed = useIsFocused();
    console.log('book id is ', bookId);
    console.log('Book data is ', bookData);

    //handling back hardware button
    useEffect(() => {
        const getDetail = async () => {
            dispatch(appActions.IFetchBookDetailRequest(parseInt(bookId, 10)));
        };

        getDetail();
    }, [bookId, dispatch, isFocussed]);

    return (
        <View>
            {isLoading || bookData === null ? (
                <Shimmer />
            ) : (
                <Container base_url={base_url} books={bookData} />
            )}
        </View>
    );
};

export default BookDetail;
