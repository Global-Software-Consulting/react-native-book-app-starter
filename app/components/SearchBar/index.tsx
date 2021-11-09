import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TextInput, TouchableOpacity, View } from 'react-native'
import { useTheme } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useDispatch } from 'react-redux'
import * as appActions from 'store/actions/appActions'
import { useStyles } from './styles'

const SearchBar: React.FC = () => {
    const [searchText, setSearchText] = useState<string>('')
    const theme = useTheme()
    const styles = useStyles()
    const dispatch = useDispatch()
    const { t } = useTranslation()

    const fetchBookDetails = async () => {
        dispatch(appActions.getBookRequest(searchText))
    }

    return (
        <View style={styles.searchView}>
            <TextInput
                testID={'searchInput'}
                underlineColorAndroid="transparent"
                placeholder={t('Search Here')}
                placeholderTextColor={theme?.colors?.text}
                onChangeText={(text) => setSearchText(text)}
                style={styles.searchViewInput}
                onEndEditing={() => fetchBookDetails()}
            />
            <TouchableOpacity testID={'searchBookies'} onPress={() => fetchBookDetails()}>
                <Icon name="search" size={20} style={styles.searchViewChildren} />
            </TouchableOpacity>
        </View>
    )
}
export default SearchBar
