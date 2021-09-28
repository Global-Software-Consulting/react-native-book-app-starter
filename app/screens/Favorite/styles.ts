import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';
export const useStyles = () => {
    const theme = useTheme();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const styles = StyleSheet.create({
        container: {
            paddingVertical: 0,
            paddingHorizontal: 0,
        },
        favoriteView: {
            flex: 1,
            paddingBottom: 2,
        },
        mainShimmerView: {
            height: hp('100%'),
            justifyContent: 'center',
            alignItems: 'center',
        },
        bookmark: {
            margin: 2,
        },
        imageError: {
            height: hp('50%'),
            width: wp('50%'),
            tintColor: theme.colors.text,
        },
        containerView: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'stretch',
        },
        name: {
            fontSize: hp('3%'),
            fontWeight: 'bold',
            fontFamily: 'Avenir-Medium',
            alignItems: 'center',
        },
        tagLine: {
            fontSize: hp('2%'),
            fontFamily: 'Avenir-Medium',
            alignItems: 'center',
        },
        listCaption: {
            marginTop: 15,
            fontSize: hp('2%'),
            fontFamily: 'Avenir-Medium',
            alignItems: 'center',
            fontWeight: 'bold',
        },
        button: {
            backgroundColor: '#61e3a5',
            padding: 10,
            borderRadius: 10,
            margin: 10,
        },
        horizontalRuler: {
            borderBottomColor: '#DCDCDC',
            borderBottomWidth: 1,
            marginTop: 30,
        },
        flatList: {
            height: windowHeight > windowWidth ? hp('100%') : wp('100'),
            marginTop: 10,
            flexDirection: 'column',
            marginBottom: 30,
        },
        mainView: {
            alignItems: 'center',
            backgroundColor: theme.colors.background,
        },
        books: {
            height: hp('2%'),
            width: wp('1%'),
            borderRadius: 4,
        },

        bookTrending: {
            height: hp('25%'),
            width: wp('37%'),
            borderRadius: 4,
        },

        bookGeneral: {
            height: hp('20%'),
            width: wp('30%'),
            borderRadius: 4,
        },
        bookView: {
            backgroundColor: 'transparent',
            paddingRight: 20,
        },
    });
    return styles;
};
