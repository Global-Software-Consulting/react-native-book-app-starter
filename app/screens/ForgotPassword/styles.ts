import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import {
    heightPercentageToDP,
    widthPercentageToDP,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const useStyles = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,

            backgroundColor: theme.colors.background,
            alignItems: 'center',
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
        },
        subHeading: {
            fontWeight: 'bold',
            color: theme.colors.text,
        },
        inputField: {
            width: wp('50%'),
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
            marginBottom: 20,
        },
        linearGradient: {
            height: heightPercentageToDP('15%'),
            alignItems: 'center',
            justifyContent: 'center',
            width: widthPercentageToDP('100%'),
        },
        cardView: {
            backgroundColor: 'white',
            width: widthPercentageToDP('90%'),
            zIndex: 5,
            borderRadius: 20,
            marginTop: -30,
            alignSelf: 'center',
            justifyContent: 'center',
        },
        headingText: {
            fontSize: 30,
            fontWeight: '500',
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 20,
            color: '#3A3B3C',
        },
        button: { height: 40, width: widthPercentageToDP('60%'), marginTop: 5 },
        activityIndicator: { position: 'absolute', marginLeft: widthPercentageToDP('30%') },
    });
    return styles;
};
