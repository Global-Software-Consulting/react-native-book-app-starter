import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { getPercentageHeight, getPercentageWidth } from 'utils/dimentionUtil';
import { Dimensions } from 'react-native';
export const useStyles = () => {
    const theme = useTheme();
    const height = getPercentageHeight();
    const width = getPercentageWidth();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const styles = StyleSheet.create({
        container: {
            backgroundColor: theme.colors.background,
            alignItems: 'center',
            flexGrow: 1,
        },
        submitView: {
            backgroundColor: '#00416A',
            alignContent: 'center',
            alignSelf: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 30,
            borderRadius: 20,
            marginBottom:20
        },
        activity: {
            marginLeft: width('40%'),
            alignSelf: 'center',
            position: 'absolute',
        },
        submit: {
            height: 40,
            width: width('50%'),
            marginTop: 5,
        },
        displayPicture: {
            height: windowHeight > windowWidth ? height('15%') : height('60%'),
            width: width('30%'),
            marginVertical: 20,
            borderRadius: windowHeight > windowWidth ? 70 : 120,
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
            width: width('50%'),
            height: height('5%'),
            color: theme.colors.text,
        },
        infoView: {
            marginTop: 5,
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: theme.colors.text,
            borderRadius: 20,
            alignContent: 'center',
            alignItems: 'center',
            paddingLeft: 5,
            width: width('80%'),
            height: 50,
        },
        infoInputView: {
            marginTop: 5,
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center',
            paddingLeft: 5,
            width: width('80%'),
            height: 50,
        },
        editView: {
            backgroundColor: '#E6E6FA',
            alignContent: 'center',
            alignSelf: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 20,
            borderRadius: 20,
            alignItems: 'center',
            textAlign: 'center',
            color: theme.colors.text,
            padding: 10,
            marginBottom: 10,
        },
        editButton: {
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 5,
        },
    });
    return styles;
};
