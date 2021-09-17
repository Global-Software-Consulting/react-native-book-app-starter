import { IThemeState } from 'models/reducers/theme';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import * as themeActions from 'store/actions/themeActions';

interface IState {
    themeReducer: IThemeState;
}

const ThemeController: React.FC = () => {
    const isDark = useSelector((state: IState) => state.themeReducer.isDark);

    const dispatch = useDispatch();
    const onToggleTheme = () => dispatch(themeActions.setIsDarkTheme(!isDark));
    const iconName = isDark ? 'weather-night' : 'white-balance-sunny';
    const iconColor = isDark ? 'black' : 'blue';

    return (
        <View style={styles.container}>
            <Switch value={isDark} onValueChange={onToggleTheme} />
            <Icon name={iconName} size={20} style={styles.icon} color={iconColor} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 5,
    },
    icon: { marginLeft: 4 },
});

export default ThemeController;
