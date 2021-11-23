//to update heart icon on focus
import { useIsFocused } from '@react-navigation/core'
import { FavoriteBook } from 'models/reducers/appReducers'
import { ReducerState } from 'models/reducers/index'
import React, { useState } from 'react'
import { Platform, View } from 'react-native'
import NetInfo from '@react-native-community/netinfo'
import * as snackbarActions from './../../store/actions/snackbarActions'
import { Text } from 'react-native-paper'
//image with placeholder
import FastImage from 'react-native-fast-image'
//verctor icons
import Icon from 'react-native-vector-icons/FontAwesome'
//for responsive screen
import { useDispatch, useSelector } from 'react-redux'
import addBookToFavoite from 'services/addBookToFavoite'
import removeBookFromFavoite from 'services/removeBookFromFavoite'
import * as appActions from 'store/actions/appActions'
import { useEffect } from './../../../workaround/useEffect'
//importing style
import { useStyles } from './styles'
import { IData, Props } from './types'

const BookCard: React.FC<Props> = ({
    id,
    url,
    styleSelect,
    bookTitle,
    hideIcon,
    authorName,
    book,
}) => {
    const favoriteBooks = useSelector((state: ReducerState) => state.appReducer.favorite)
    const allBooks = useSelector((state: ReducerState) => state.appReducer.books)
    const isFocused = useIsFocused()
    const [isFavorite, setIsFavorite] = useState<boolean>(false)
    const dispatch = useDispatch()
    const styles = useStyles()
    const [testBooks, setTestBooks] = useState(favoriteBooks)
    useEffect(() => {
        favoriteBooks?.findIndex((value: IData) => {
            if (value?.bookId === id) {
                setIsFavorite(true)
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFocused])

    const apiAddFavorite = async () => {
        if (isFavorite) {
            //filtering out new data after deletion
            const newData: Array<FavoriteBook> = favoriteBooks.filter((item) => item.bookId !== id)

            //removing the red heart icon
            setIsFavorite(false)

            //passing on the new data to be set as favorite
            dispatch(appActions.setNewFavorites(newData))
            removeBookFromFavoite(id).then((response) => {
                if (response && response?.status === 'success') {
                    return response
                } else {
                    setIsFavorite(true)
                    dispatch(snackbarActions.enableSnackbar('Response Stored offline.'))
                }
                return response
            })
            //calling the api for removal of data
        } else {
            setIsFavorite(true)
            setIsFavorite(true)
            addBookToFavoite(id)
                .then((response) => {
                    if (response && response.status === 'success') {
                        dispatch(snackbarActions.enableSnackbar('Synchronized.'))

                        return response
                    } else {
                        let arr = [...favoriteBooks]
                        arr.push({ bookId: id })
                        console.log('selected', id)
                        console.log('new fav books', arr)
                        dispatch(appActions.setNewFavorites(arr))
                        dispatch(snackbarActions.enableSnackbar('Stored offline.'))
                    }
                    return response
                })
                .catch(() => {
                    let arr = [...favoriteBooks]
                    arr.push({ bookId: id })
                    console.log('selected', id)
                    console.log('new fav books', arr)
                    dispatch(appActions.setNewFavorites(arr))
                    dispatch(snackbarActions.enableSnackbar('Stored offline.'))
                })
        }
    }

    return (
        <View style={Platform.OS === 'android' ? styles.bookViewAndroid : styles.bookViewIOS}>
            <FastImage
                source={{ uri: url, priority: FastImage.priority?.normal }}
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
                    testID="heart"
                />
            )}
            <Text
                style={
                    styleSelect === 'General' || styleSelect === 'Custom'
                        ? styles.textTitle
                        : styleSelect === 'Large'
                        ? styles.textLargeTitle
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
    )
}

export default BookCard
