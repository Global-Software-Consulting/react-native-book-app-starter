import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

export const useStyles = () => {
    const theme = useTheme();

    const styles = StyleSheet.create({
        Header: {
            backgroundColor: theme.colors.background,
        },
        Icon: {
            paddingLeft: 10,
            color: theme.colors.primary,
        },
    });
    return styles;
};
