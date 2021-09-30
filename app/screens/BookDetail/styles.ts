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
            margin: 20,
            height: height('20'),
            width: width('80'),
            alignSelf: 'center',
            backgroundColor: '#E7E5E7',
        },
        mainShimmerView: {
            margin: 20,
            height: height('20'),
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
        },

        bookShimmer: {
            height: windowHeight > windowWidth ? height('45%') :height('70%'),
            width: windowHeight > windowWidth ? width('60%') :width('20%'),
            borderRadius: 4,
            backgroundColor: '#E7E5E7',
            alignSelf: 'center',
            margin: 20,
        },

        sizeText: {
            fontWeight: '300',
            fontSize: 15,
            textAlign: 'center',
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
    });
    return styles;
};
