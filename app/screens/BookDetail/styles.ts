import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import {
    heightPercentageToDP,
    heightPercentageToDP as hp,
    widthPercentageToDP,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const useStyles = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingVertical: 45,
            paddingHorizontal: 10,
        },
        subView: {
            flexDirection: 'column',
        },
        genreText: {
            fontWeight: '300',
            fontSize: 15,
        },
        launchedSubView: {
            flexDirection: 'column',
        },
        launchedText: {
            fontWeight: '300',
            fontSize: 15,
        },
        main: {
            height: heightPercentageToDP('100%'),
            backgroundColor: theme.colors.background,
        },
        dynamicLaunchedText: {
            fontWeight: 'bold',
            fontSize: 15,
            maxWidth: widthPercentageToDP('25%'),
        },
        dynamicSize: {
            fontWeight: 'bold',
            fontSize: 15,
            maxWidth: widthPercentageToDP('25%'),
        },
        synopseView: {
            flexDirection: 'column',
            margin: 30,
        },
        subShimmerView: {
            margin: 20,
            height: heightPercentageToDP('20'),
            width: widthPercentageToDP('80'),
            alignSelf: 'center',
            backgroundColor: '#E7E5E7',
        },
        mainShimmerView: {
            margin: 20,
            height: heightPercentageToDP('20'),
            width: widthPercentageToDP('80'),
            alignSelf: 'center',
            backgroundColor: '#E7E5E7',
        },
        dynamicSynopse: {
            fontWeight: 'bold',
            fontSize: 15,
            marginBottom: 50,
        },
        synopseText: {
            fontWeight: '300',
            fontSize: 15,
            marginBottom: 10,
        },

        sizeText: {
            fontWeight: '300',
            fontSize: 15,
        },
        pagesSubView: {
            flexDirection: 'column',
        },
        dynamicGenreText: {
            fontWeight: 'bold',
            fontSize: 15,
            maxWidth: widthPercentageToDP('25%'),
        },
        mainView: {
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-evenly',
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
            flexGrow: 0,
            marginTop: 10,
            flexDirection: 'column',
            marginBottom: 40,
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
