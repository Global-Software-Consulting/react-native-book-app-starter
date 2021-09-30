import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { Dimensions } from 'react-native';
import { getPercentageWidth } from 'utils/dimentionUtil';
export const useStyles = () => {
    const theme = useTheme();
    const width = getPercentageWidth();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const styles = StyleSheet.create({
        Header: {
            backgroundColor: theme.colors.background,
        },
        Icon: {
            fontSize: windowHeight > windowWidth ? width('7%') : width('3%'),
            paddingLeft: 10,
            color: theme.colors.primary,
        },
    });
    return styles;
};
