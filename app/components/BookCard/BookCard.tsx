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
import { useSelector } from 'react-redux';
import addBookToFavoite from 'services/addBookToFavoite';
import removeBookFromFavoite from 'services/removeBookFromFavoite';
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
    numberOfPages: number;
    shortSummary: string;
    book: {
        title: string;
        id: number;
    };
}
const BookCard: React.FC<Props> = ({ id, url, styleSelect, bookTitle, hideIcon, authorName }) => {
    const newFavorites = useSelector((state: IState) => state.appReducer.favorite);
    const isFocused = useIsFocused();
    const [isFavorite, setIsFavorite] = useState(false);

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
            setIsFavorite(false);
            removeBookFromFavoite(id).then((response) => {
                if (response && response.status === 'success') {
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
