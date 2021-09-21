//to update heart icon on focus
import { useIsFocused } from '@react-navigation/native';
import { IBookState } from 'models/reducers/fetchBooks';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
//image with placeholder
import FastImage from 'react-native-fast-image';
import { Text } from 'react-native-paper';
//verctor icons
import Icon from 'react-native-vector-icons/FontAwesome';
//for responsive screen
import { useSelector, useDispatch } from 'react-redux';
import addBookToFavoite from 'services/addBookToFavoite';
import removeBookFromFavoite from 'services/removeBookFromFavoite';
import * as appActions from 'store/actions/appActions';
//importing style
import styles from './styles';
interface Props {
    id?: number;
    hideIcon?: boolean;
    url?: string;
    bookTitle?: string;
    styleSelect: 'General' | 'Custom' | 'Large' | 'ExtraLarge';
    authorName?: string;
    isFavorite?: boolean;
}
interface IState {
    appReducer: IBookState;
}

interface IData {
    id: number;
    bookId: number;
    averageRating: number;
    title: string;
    numberOfPages: string | number;
    shortSummary: string;
    book: {
        title: string;
        id: number;
    };
}
const BookCard: React.FC<Props> = ({ id, url, styleSelect, bookTitle, hideIcon, authorName }) => {
    const newFavorites = useSelector((state: IState) => state.appReducer.favorite);
    let favoriteBooks = newFavorites;
    const isFocused = useIsFocused();
    const [isFavorite, setIsFavorite] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        newFavorites?.findIndex((value: IData) => {
            if (value?.bookId === id) {
                setIsFavorite(true);
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFocused]);

    const apiAddFavorite = async () => {
        if (isFavorite) {
            //here we will delete the object from the objects
            // favoriteBooks?.findIndex((value: IData) => {
            //     if (value?.bookId === id) {
            //         setIsFavorite(true);
            //     }
            // });
            //here you will write the code
            dispatch(appActions.setNewFavorites(favoriteBooks));
            removeBookFromFavoite(id).then((response) => {
                if (response && response?.status === 'success') {
                    return response;
                } else {
                    setIsFavorite(true);
                }
                return response;
            });
        } else {
            setIsFavorite(true);

            addBookToFavoite(id)
                .then((response) => {
                    if (response && response.status === 'success') {
                        return response;
                    } else {
                        setIsFavorite(false);
                    }
                    return response;
                })
                .catch(() => {
                    setIsFavorite(false);
                });
        }
    };

    return (
        <View style={styles.bookView}>
            <FastImage
                source={{ uri: url, priority: FastImage.priority.normal }}
                resizeMode="contain"
                style={
                    styleSelect === 'General'
                        ? styles.bookGeneral
                        : styleSelect === 'Custom'
                        ? styles.bookTrending
                        : styleSelect === 'Large'
                        ? styles.bookLarge
                        : styles.bookExtraLarge
                }
            />
            {!hideIcon && (
                <Icon
                    name="heart"
                    size={25}
                    style={
                        styleSelect === 'General'
                            ? styles.heartIconGeneral
                            : styleSelect === 'Custom'
                            ? styles.heartIconTrending
                            : styles.heartIconLarge
                    }
                    color={isFavorite ? 'red' : 'white'}
                    onPress={apiAddFavorite}
                />
            )}
            <Text
                style={
                    styleSelect === 'General' || styleSelect === 'Custom' || styleSelect === 'Large'
                        ? styles.textTitle
                        : styles.textTitleEnlarged
                }>
                {bookTitle}
            </Text>
            <Text
                style={
                    styleSelect === 'General' || styleSelect === 'Custom' || styleSelect === 'Large'
                        ? styles.authorTitle
                        : styles.authorTitleEnlarged
                }>
                {authorName}
            </Text>
        </View>
    );
};

export default BookCard;
