import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

export const useStyles = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },

        labelStyle: {
            fontSize: 12,
            marginBottom: 12,
        },
        drawerContent: {
            flex: 1,
        },
        userInfoSection: {
            paddingLeft: 20,
        },
        title: {
            marginTop: 20,
            fontWeight: 'bold',
        },
        text: {
            marginTop: 2,
            fontWeight: 'bold',
            // textAlign:'flex',
        },
        chekboxtext: {
            // marginTop: 5,
            fontWeight: 'bold',
            margin: 8,
        },
        caption: {
            fontSize: 14,
            lineHeight: 14,
        },
        row: {
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
        },
        col: {
            marginTop: 20,
            flexDirection: 'column',
            alignItems: 'center',
        },
        section: {
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 15,
        },
        paragraph: {
            fontWeight: 'bold',
            marginRight: 3,
        },
        drawerSection: {
            marginTop: 15,
        },
        preference: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems:'center',
            paddingVertical: 12,
            paddingHorizontal: 16,
        },
        button: {
            backgroundColor: '#f8f8ff',
            padding: 10,
            borderRadius: 10,
            margin: 10,
            flexDirection: 'row',
        },
        listbutton: {
            backgroundColor: theme.colors.background,
            padding: 5,
            borderRadius: 10,
            margin: 2,
            flexDirection: 'row',
        },
    });
    return styles;
};
