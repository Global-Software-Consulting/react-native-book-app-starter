import AppStyles from 'config/styles';
import { StyleSheet } from 'react-native';
import { getPercentageWidth, getPercentageHeight } from 'utils/dimentionUtil';

export const useStyles = () => {
    const height = getPercentageHeight();
    const width = getPercentageWidth();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        darkcontainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        guidingline: {
            fontSize: 15,
            fontWeight: '300',
            color: 'grey',
            alignSelf: 'center',
        },
        emailText: {
            width: width('80%'),
            height: height('6%'),
            padding: 5,
            alignSelf: 'center',
            borderWidth: 1,
            borderRadius: 20,
            marginTop: 10,
            backgroundColor: 'white',
        },

        passwordText: {},
        iconEye: {
            margin: 4,
        },
        loginText: {
            color: 'white',
        },
        activityIndicator: {
            margin: 5,
        },
        signupText: {
            color: '#db7093',
        },
        loginButton: {
            height: height('6 %'),
            width: width('60%'),
            marginTop: 5,
        },
        textMessage: {
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 5,
        },
        touchableHighlight: {
            justifyContent: 'center',
            alignContent: 'center',
            flex: 1,
            alignItems: 'center',
        },
        forgetPasswordText: {
            alignSelf: 'flex-end',
            marginRight: 20,
            color: 'black',
            justifyContent: 'center',
        },
        loginView: {
            backgroundColor: '#491484',
            alignContent: 'center',
            alignSelf: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 15,
            height: height('5%'),
        },
        heading: {
            fontSize: 30,
            fontWeight: '500',
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 20,
        },
        subcontainer: {
            // flex: 1,
            marginTop: '10%',
            width: '60%',
            height: '50%',
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            borderWidth: 0.25,
            borderColor: AppStyles.colors.COLOR_DARK_SEPERATOR,
        },
        login: {
            margin: 12,
        },

        forgot: {
            color: AppStyles.colors.COLOR_BLACK,
            marginTop: 12,
        },
        label: {
            fontSize: 12,
        },
        linearGradient: {
            height: height('25%'),
            alignItems: 'center',
            justifyContent: 'center',
            width: width('100%'),
        },
        welcomeText: { color: '#FAF9F6', fontSize: 30 },
        subHeading: {
            color: '#FAF9F6',
            fontSize: 15,
            maxWidth: width('85%'),
        },
        cardView: {
            backgroundColor: 'white',
            width: width('90%'),
            zIndex: 5,
            borderRadius: 20,
            marginTop: height('-2%'),
            alignSelf: 'center',
            justifyContent: 'center',
        },
        logo: { alignSelf: 'center', position: 'relative' },
        logInText: {
            fontSize: 30,
            fontWeight: '500',
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 20,
            color: '#3A3B3C',
        },
        subLoginText: {
            fontSize: 15,
            fontWeight: '300',
            color: 'grey',
            alignSelf: 'center',
            marginBottom: height('3%'),
        },
        miniView: {
            fontSize: 15,
            fontWeight: '300',
            color: 'grey',
            alignSelf: 'center',
        },
        emailInput: {
            alignSelf: 'center',
            borderRadius: 20,
            margin: 5,
            backgroundColor: 'white',
            width: width('60%'),
        },
        passwordView: {
            flexDirection: 'row',
            borderColor: 'black',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: width('62%'),
            height: 50,
            marginTop: 5,
            alignSelf: 'center',
        },
        passwordInput: {
            alignSelf: 'center',
            borderRadius: 20,
            margin: 5,
            backgroundColor: 'white',
            width: width('60%'),
        },
        icon: { position: 'absolute', marginLeft: '85%' },
        errorMessage: { alignSelf: 'center', color: 'red' },
        touchableOpacity: {
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
        },
        link: {
            alignSelf: 'flex-end',
            marginRight: 20,
            color: '#00416A',
            justifyContent: 'center',
        },
        submitView: {
            backgroundColor: '#00416A',
            alignContent: 'center',
            alignSelf: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 30,
            borderRadius: 20,
        },
        menu: {
            margin: 5,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
        },
        submit: {
            height: 40,
            width: width('60%'),
            marginTop: 5,
        },
        activity: {
            marginLeft: width('50%'),
            alignSelf: 'center',
            position: 'absolute',
        },
        basicText: {
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 5,
        },
    });

    return styles;
};
