import { Platform, StyleSheet } from 'react-native';
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
            marginBottom: 2,
            minWidth: width('100%'),
            alignItems: 'center',
        },
        mainShimmerView: {
            height: height('100%'),
            justifyContent: 'center',
            alignItems: 'center',
        },
        bookmark: {
            marginBottom: height('25%'),
        },
        imageError: {
            height: windowHeight > windowWidth ? height('50%') : height('100%'),
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
            marginTop: height('4%'),
            flexDirection: 'column',
            marginBottom: Platform.OS === "ios" ? height('20%') : height('30%'),
            minHeight: Platform.OS === "ios" ? height('74%') : height('75%')

        },
        mainView: {
            alignItems: 'center',
            backgroundColor: theme.colors.background,
            minHeight:  height('100%') ,
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
