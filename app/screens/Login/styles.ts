import { StyleSheet } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import AppStyles from 'config/styles';

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
        width: widthPercentageToDP('80%'),
        height: heightPercentageToDP('6%'),
        padding: 5,
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 10,
        backgroundColor: 'white',
    },
    passwordView: {
        marginBottom: 20,
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: widthPercentageToDP('80%'),
        height: heightPercentageToDP('6%'),
        marginTop: 5,
        alignSelf: 'center',
    },
    passwordText: {
        padding: 5,
        alignSelf: 'center',
        borderRadius: 20,
        margin: 5,
        backgroundColor: 'white',
        width: widthPercentageToDP('60%'),
    },
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
        height: heightPercentageToDP('6 %'),
        width: widthPercentageToDP('60%'),
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
        height: heightPercentageToDP('5%'),
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
    logo: {
        alignSelf: 'center',
        marginTop: 20,
        width: widthPercentageToDP('40%'),
        height: heightPercentageToDP('30%'),
    },
    forgot: {
        color: AppStyles.colors.COLOR_BLACK,
        marginTop: 12,
    },
    label: {
        fontSize: 12,
    },
});

export default styles;
