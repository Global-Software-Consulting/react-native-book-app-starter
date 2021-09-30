import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { getPercentageHeight, getPercentageWidth } from 'utils/dimentionUtil';
export const useStyles = () => {
    const theme = useTheme();
    const height = getPercentageHeight();
    const width = getPercentageWidth();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.background,
            alignItems: 'center',
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
        },
        subHeading: {
            fontWeight: 'bold',
            color: theme.colors.text,
        },
        inputField: { width: width('50%'), height: 40 },
        infoView: {
            borderColor: theme.colors.text,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            width: width('80%'),
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
            height: height('15%'),
            alignItems: 'center',
            justifyContent: 'center',
            width: width('100%'),
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
            backgroundColor: 'white',
            width: width('90%'),
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
        button: { height: 40, width: width('60%'), marginTop: 5 },
        activityIndicator: {
            marginLeft: width('50%'),
            alignSelf: 'center',
            position: 'absolute',
        },
    });
    return styles;
};
