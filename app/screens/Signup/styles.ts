import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export const useStyles = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white',
        },
        dropDown: {
            width: widthPercentageToDP('80%'),
            alignSelf: 'center',
            borderRadius: 20,
            marginTop: 10,
        },
        displayPicture: {
            height: heightPercentageToDP('15%'),
            width: widthPercentageToDP('30%'),
            marginVertical: 20,
            borderRadius: 40,
            backgroundColor: 'transparent',
        },
        horizontalRuler: {
            borderBottomWidth: 2,
            marginTop: 3,
            color: 'gray',
            borderBottomColor: 'red',
        },
        mainHeading: {
            fontWeight: 'bold',
            color: theme.colors.text,
            fontSize: 25,
            marginTop: 20,
            marginBottom: 20,
        },
        subHeading: {
            fontWeight: 'bold',
            color: theme.colors.text,
        },
        inputField: {
            width: widthPercentageToDP('50%'),
            color: 'black',
            height: 40,
        },
        infoView: {
            marginBottom: 10,
            borderColor: theme.colors.text,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            width: widthPercentageToDP('80%'),
            height: 50,
        },
        editView: {
            backgroundColor: '#00416A',
                        alignContent: 'center',
                        alignSelf: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        marginTop: 30,
            borderRadius: 20,
                        marginBottom:20
        },
        editButton: {
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 5,

        },
    });
    return styles;
};
