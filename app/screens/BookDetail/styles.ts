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
            textAlign: 'center',
        },
        launchedSubView: {
            flexDirection: 'column',
        },
        launchedText: {
            fontWeight: '300',
            fontSize: 15,
            textAlign: 'center',
        },
        main: {
            backgroundColor: theme.colors.background,
            minHeight:height('100%')
        },
        dynamicLaunchedText: {
            fontWeight: 'bold',
            fontSize: 15,
            maxWidth: width('25%'),
            textAlign: 'center',
        },
        dynamicSize: {
            fontWeight: 'bold',
            fontSize: 15,
            maxWidth: width('25%'),
            textAlign: 'center',
        },
        synopseView: {
            flexDirection: 'column',
            margin: 30,
        },
        subShimmerView: {
            margin: 5,
            height: height('20'),
            width: width('80'),
            alignSelf: 'center',
            backgroundColor: '#E7E5E7',
        },
        mainShimmerView: {
            margin: 10,
            height: height('10'),
            width: width('80'),
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
            marginRight:10
        },

        bookShimmer: {
            height: windowHeight > windowWidth ? height('30%') : height('70%'),
            width: windowHeight > windowWidth ? width('50%') : width('20%'),
            borderRadius: 20,
            elevation:5,
            backgroundColor: '#E7E5E7',
            alignSelf: 'center',
            margin: 10,
        },

        sizeText: {
            fontWeight: '300',
            fontSize: 15,
            textAlign: 'center',
        },
        tagLineShimmer: {
            width: width('40%'),
            height: height('4%'),
            backgroundColor: '#E7E5E7',
            marginRight:width('2%')
        },
        tagLineShimmerLeft:
        {
            width: width('40%'),
            height: height('4%'),
            backgroundColor: '#E7E5E7',
            marginRight: width('2%'),
            alignSelf: 'flex-start',
            marginLeft: width('9%')
            },
        pagesSubView: {
            flexDirection: 'column',
        },
        dynamicGenreText: {
            fontWeight: 'bold',
            fontSize: 15,
            maxWidth: width('25%'),
            textAlign: 'center',
        },
        mainView: {
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-evenly',
        },
        name: {
            fontSize: height('3%'),
            fontWeight: 'bold',
            fontFamily: 'Avenir-Medium',
            alignItems: 'center',
        },
        tagLine: {
            fontSize: height('2%'),
            fontFamily: 'Avenir-Medium',
            alignItems: 'center',
        },
        listCaption: {
            marginTop: 15,
            fontSize: height('2%'),
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
            marginTop: 4,
        },
        flatList: {
            flexGrow: 0,
            marginTop: 10,
            flexDirection: 'column',
            marginBottom: 40,
        },

        books: {
            height: height('2%'),
            width: width('1%'),
            borderRadius: 4,
        },

        bookTrending: {
            height: height('25%'),
            width: width('37%'),
            borderRadius: 4,
        },

        bookGeneral: {
            height: height('20%'),
            width: width('30%'),
            borderRadius: 4,
        },
        bookView: {
            backgroundColor: 'transparent',
            paddingRight: 20,
        },
        submitView: {
            alignContent: 'center',
            alignSelf: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 30,
            borderRadius: 20,
            marginBottom: 20,
            marginRight:10
        },
        submit: {
            height: 40,
            width: width('40%'),
            marginTop: 5,
        },
    });
    return styles;
};
