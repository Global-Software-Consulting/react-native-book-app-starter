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
            flex: 1,
            paddingVertical: 10,
            paddingHorizontal: 30,
            backgroundColor: theme.colors.background,
            marginBottom: height('10%'),
        },
        favoriteView: {
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: height('6%')
        },
        bookmark: {
            margin: 2,
            fontWeight: 'bold',
        },
        imageError: {
            height: windowHeight > windowWidth ? height('50%') : height('100%'),
            width: width('50%'),
            tintColor: theme.colors.text,
        },
        mainViewSetting: { height: height('100%') },
        name: {
            fontSize: windowHeight > windowWidth ? width('5%') : width('3%'),
            fontWeight: 'bold',
            fontFamily: 'Avenir-Medium',
            alignItems: 'center',
            color: theme.colors.text,
        },
        middleView: {
            marginBottom: windowHeight > windowWidth ? height('15%') : Platform.OS==="ios" ? height('25%') :height('40%') ,
        },
        nameShimmer: {
            width: width('25%'),
            height: height('6%'),
            backgroundColor: '#E7E5E7',
            marginBottom: 2,
        },
        tagLine: {
            fontSize: windowHeight > windowWidth ? width('4%') : width('2%'),
            fontFamily: 'Avenir-Medium',
            alignItems: 'center',
            color: theme.colors.text,
        },
        tagLineShimmer: {
            width: width('40%'),
            height: height('4%'),
            backgroundColor: '#E7E5E7',
        },
        listCaption: {
            fontSize: windowHeight > windowWidth ? width('4%') : width('2%'),
            marginTop: height('2%'),
            fontFamily: 'Avenir-Medium',
            alignItems: 'center',
            fontWeight: 'bold',
            color: theme.colors.text,
        },
        listCaptionShimmer: {
            width: width('20%'),
            height: height('3%'),
            backgroundColor: '#E7E5E7',
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
            marginTop: height('0.5%'),
            color: theme.colors.primary,
        },
        flatList: {
            flexGrow: 1,
            marginTop: 10,
        },
        flatListLast: {
            flexGrow: 1,
            marginTop: 10,
            marginBottom: height('3%'),
        },
        searchView: {
            marginTop: 20,
            marginBottom: 20,
            flexDirection: 'row',
            borderColor: 'grey',
            borderWidth: 1,
            borderRadius: 30,
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        searchViewShimmer: {
            marginBottom: 20,
            flexDirection: 'row',
            borderRadius: 30,
            justifyContent: 'space-between',
            alignItems: 'center',
            height: height('5%'),
            backgroundColor: '#E7E5E7',
        },
        searchViewChildren: {
            margin: 2,
            marginLeft: 5,
            color: theme.colors.text,
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
