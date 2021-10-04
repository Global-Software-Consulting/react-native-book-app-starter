import { StyleSheet } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { getPercentageHeight, getPercentageWidth } from 'utils/dimentionUtil';
import { Dimensions } from 'react-native';
import { useTheme } from 'react-native-paper';
export const useStyles = () => {
    const width = getPercentageWidth();
    const height = getPercentageHeight();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingVertical: 45,
            paddingHorizontal: 30,
            backgroundColor: 'white',
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
            flexGrow: 0,
            marginTop: 10,
        },

        books: {
            height: height('2%'),
            width: width('1%'),
            borderRadius: 4,
        },

        bookTrending: {
            height: windowHeight > windowWidth ? height('25%') : height('50%'),
            width: windowHeight > windowWidth ? width('37%') : width('15%'),
            borderRadius: 15,
        },

        bookGeneral: {
            height: windowHeight > windowWidth ? height('25%') : height('40%'),
            width: windowHeight > windowWidth ? width('30%') : width('14%'),
            borderRadius: 15,
        },

        bookLarge: {
            height: windowHeight > windowWidth ? height('30%') : height('50%'),
            width: windowHeight > windowWidth ? width('40%') : width('20%'),
            borderRadius: 15,
            margin: 10,
        },
        bookLargeShimmer: {
            height: windowHeight > windowWidth ? height('30%') : height('50%'),
            width: windowHeight > windowWidth ? width('40%') : width('20%'),
            borderRadius: 15,
            margin: 10,
            backgroundColor: '#E7E5E7',
        },

        bookExtraLarge: {
            height: windowHeight > windowWidth ? height('50%') : height('70%'),
            width: width('65%'),
            borderRadius: 20,
            margin: 5,
            alignSelf: 'center',
        },

        bookTrendingShimmer: {
            height: windowHeight > windowWidth ? height('25%') : height('50%'),
            width: windowHeight > windowWidth ? width('37%') : width('15%'),
            borderRadius: 15,
            backgroundColor: '#E7E5E7',
        },
        bookTrendingExtraLargeShimmer: {
            height: windowHeight > windowWidth ? height('50%') : height('70%'),
            width: width('65%'),
            borderRadius: 20,
            margin: 5,
            alignSelf: 'center',
        },

        textTitleEnlarged: {
            fontSize: 30,
            maxWidth: width('60%'),
            fontWeight: '500',
            alignSelf: 'center',
        },
        authorTitleEnlarged: {
            maxWidth: width('55%'),
            color: 'red',
            fontWeight: '300',
            alignSelf: 'center',
            fontSize: 20,
        },

        bookGeneralShimmer: {
            height: windowHeight > windowWidth ? height('25%') : height('40%'),
            width: windowHeight > windowWidth ? width('30%') : width('14%'),
            borderRadius: 15,
            backgroundColor: '#E7E5E7',

        },

        bookView: {
           
            backgroundColor: 'transparent',
            margin: 2,
            borderRadius: 20,
            marginRight: 3,
        },

        heartIconTrending: {
            position: 'absolute',
            marginVertical: windowHeight > windowWidth ? height('21%') : height('40%'),
            marginHorizontal: DeviceInfo.isTablet()
                ? width('9%')
                : windowHeight > windowWidth
                ? width('4%')
                : width('1%'),
        },
        heartIconLarge: {
            position: 'absolute',
            marginVertical: windowHeight > windowWidth ? height('26%') : height('42%'),
            marginHorizontal: DeviceInfo.isTablet() ? width('9%') : width('5%'),
        },
        textTitle: {
            maxWidth: windowHeight > windowWidth ? width('30%') : width('15%'),
            fontWeight: 'bold',
            alignSelf: 'center',
            textAlign: 'center',
        },
        textLargeTitle: {
            maxWidth: windowHeight > windowWidth ? width('30%') : width('10%'),
            fontWeight: 'bold',
            alignSelf: 'center',
            textAlign: 'center',
        },
        authorTitle: {
            maxWidth: width('30%'),
            fontWeight: '200',
            alignSelf: 'center',
            textAlign: 'center',
        },
        textTitleShimmer: {
            marginTop: 5,
            maxWidth: windowHeight > windowWidth ? width('30%') : width('15%'),
            fontWeight: 'bold',
            alignSelf: 'center',
            textAlign: 'center',
        },
        heartIconGeneral: {
            position: 'absolute',
            marginVertical: windowHeight > windowWidth ? height('19%') : height('32%'),
            marginHorizontal: DeviceInfo.isTablet()
                ? width('7%')
                : windowHeight > windowWidth
                ? width('2%')
                : width('2%'),
        },
    });
    return styles;
};
