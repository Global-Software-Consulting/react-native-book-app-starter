import { useNavigation } from '@react-navigation/native'
//importing card component
import BookCard from 'components/BookCard/BookCard'
import images from 'config/images'
import { FavoriteBook } from 'models/reducers/appReducers'
import { ReducerState } from 'models/reducers/index'
import React, { useState } from 'react'
import { Dimensions, FlatList, Image, ScrollView, TouchableHighlight, View } from 'react-native'
import { useTheme, Text } from 'react-native-paper'
import { useSelector } from 'react-redux'
import { useStyles } from './styles'
import { Props } from './types'
import { dummyImages } from 'assets/dummyImages'

const Container: React.FC<Props> = (props) => {
    const generateRandomURL = () => {
        const number = Math.random() * 6
        const index = Math.floor(number)
        return dummyImages[index]
    }
    //theme handling
    const theme = useTheme()
    const styles = useStyles()
    const windowWidth = Dimensions.get('window').width
    const windowHeight = Dimensions.get('window').height
    const navigation = useNavigation()
    const isLoading = useSelector((state: ReducerState) => state.loadingReducer.isLoading)
    const favoriteBooks = useSelector((state: ReducerState) => state.appReducer.favorite)
    const { onRefresh } = props
    const navigateToDetails = async (params: number) => {
        //to check if the internet connection is working
        navigation.navigate('BookDetail' as never, params as never)
    }
    const bookList = (item: FavoriteBook) => {
        return (
            <TouchableHighlight
                testID={'book'}
                key={item.id}
                underlayColor={theme.colors.highlight}
                onPress={() => {
                    navigateToDetails(item.bookId)
                }}>
                <BookCard
                    url={generateRandomURL()}
                    styleSelect="Large"
                    id={item?.book.id}
                    bookTitle={item?.book?.title}
                    book={favoriteBooks}
                    hideIcon={false}
                />
            </TouchableHighlight>
        )
    }
    return (
        <View style={styles.mainView}>
            {favoriteBooks?.length > 0 || props.toDos === true ? (
                <FlatList
                    numColumns={windowHeight > windowWidth ? 2 : 4}
                    key={windowHeight > windowWidth ? 2 : 4}
                    keyExtractor={(item, index) => 'key' + index}
                    showsVerticalScrollIndicator={false}
                    data={favoriteBooks}
                    style={styles.flatList}
                    contentContainerStyle={{ flexGrow: 1 }}
                    onRefresh={onRefresh}
                    refreshing={isLoading}
                    renderItem={({ item }) => bookList(item)}
                    showsHorizontalScrollIndicator={false}
                />
            ) : (
                <ScrollView contentContainerStyle={styles.favoriteView}>
                    <Image source={images?.books?.noBookFound} style={styles.imageError} />
                    <Text style={styles.bookmark}>No bookmarks available</Text>
                </ScrollView>
            )}
        </View>
    )
}

export default Container
