import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { getPercentageHeight, getPercentageWidth } from 'utils/dimentionUtil';
export const useStyles = () => {
    const height = getPercentageHeight();
    const width = getPercentageWidth();
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white',
        },
        dropDown: {
            width: width('80%'),
            alignSelf: 'center',
            borderRadius: 20,
            marginTop: 10,
        },
        displayPicture: {
            height: height('15%'),
            width: width('30%'),
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
            width: width('50%'),
            color: 'black',
        },
        genderPicker: {
            width: width('60%'),
            alignSelf: 'center',
            borderRadius: 20,
            marginTop: 10,
        },
        infoView: {
            marginBottom: 10,
            borderColor: theme.colors.text,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            width: width('80%'),
            height: 50,
        },
        cardView: {
            backgroundColor: 'white',
            width: width('90%'),
            zIndex: 5,
            borderRadius: 20,
            marginTop: -30,
            alignSelf: 'center',
            justifyContent: 'center',
        },
        inputView: {
            marginBottom: 10,
            borderColor: theme.colors.text,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            width: width('80%'),
            height: height('5%'),
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
        editButton: {
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 5,
        },
        linearGradient: {
            height: height('15%'),
            alignItems: 'center',
            justifyContent: 'center',
            width: width('100%'),
        },
        imgView: {
            backgroundColor: 'white',
            width: width('90%'),
            zIndex: 5,
            borderRadius: 20,
            marginTop: -30,
            alignSelf: 'center',
            justifyContent: 'center',
        },
        img: { alignSelf: 'center', position: 'relative' },
        signUpText: {
            fontSize: 30,
            fontWeight: '500',
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 20,
            color: '#3A3B3C',
        },
        submit: {
            height: 40,
            width: width('60%'),
            marginTop: 1,
        },
        submitView: {
            backgroundColor: '#00416A',
            alignContent: 'center',
            alignSelf: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 30,
            borderRadius: 20,
            marginBottom: 20,
        },
        button: { height: 40, width: width('60%'), marginTop: 5 },
        activity: {
            marginLeft: width('50%'),
            alignSelf: 'center',
            position: 'absolute',
        },
    });
    return styles;
};
