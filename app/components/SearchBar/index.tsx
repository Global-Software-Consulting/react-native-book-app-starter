import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useStyles } from './styles';
import * as appActions from 'store/actions/appActions';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTranslation } from 'react-i18next';

const SearchBar: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const theme = useTheme();
    const styles = useStyles();
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const fetchBookDetails = async () => {
        dispatch(appActions.getBookRequest(searchText));
    };

    return (
        <View style={styles.searchView}>
            <TextInput
                underlineColorAndroid="transparent"
                placeholder={t('Search Here')}
                placeholderTextColor={theme.colors.text}
                onChangeText={(text) => setSearchText(text)}
                style={styles.searchViewChildren}
                onEndEditing={() => fetchBookDetails()}
            />
            <Icon
                name="search"
                size={20}
                style={styles.searchViewChildren}
                onPress={() => fetchBookDetails()}
            />
        </View>
    );
};
export default SearchBar;
