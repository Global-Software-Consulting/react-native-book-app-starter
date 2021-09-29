import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { getPercentageHeight, getPercentageWidth } from 'utils/dimentionUtil';
import { Dimensions } from 'react-native';
export const useStyles = () => {
    const theme = useTheme();
    const width = getPercentageWidth();
    const height = getPercentageHeight();
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
            height: height('100%'),
            justifyContent: 'center',
            alignItems: 'center',
        },
        bookmark: {
            margin: 2,
        },
        imageError: {
            height: height('50%'),
            width: width('50%'),
            tintColor: theme.colors.text,
        },
        containerView: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'stretch',
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
            marginTop: 30,
        },
        flatList: {
            height: windowHeight > windowWidth ? height('100%') : width('100'),
            marginTop: 10,
            flexDirection: 'column',
            marginBottom: 30,
        },
        mainView: {
            alignItems: 'center',
            backgroundColor: theme.colors.background,
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
