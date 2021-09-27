import { useEffect, useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';
export const useStyles = () => {
    const theme = useTheme();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [dimensions, setDimensions] = useState({ window, screen });
    const window = Dimensions.get("window");
    const [orientation, setOrientation] = useState();
    const screen = Dimensions.get("screen");

    useEffect(() => {
        const subscription = Dimensions.addEventListener(
          "change",
          ({ window, screen }) => {
              setDimensions({ window, screen });
              if (window.height > window.width) {
                setOrientation('Portrait')
              }
              else {
                setOrientation('Landscape')
              }
          }
        );
        return () => subscription?.remove();
      });
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingVertical: 10,
            paddingHorizontal: 30,
            backgroundColor: theme.colors.background,
            marginBottom: hp('10%'),
        },
        favoriteView: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        bookmark: {
            margin: 2,
        },
        imageError: {
            height: hp('50%'),
            width: wp('50%'),
            tintColor: theme.colors.text,
        },
        mainViewSetting: { height: windowHeight},
        name: {
            fontSize: hp('3%'),
            fontWeight: 'bold',
            fontFamily: 'Avenir-Medium',
            alignItems: 'center',
            color: theme.colors.text,
            
            
        },
        middleView: {
            marginBottom: orientation==='Landscape' ? windowHeight * 0.25 : windowHeight * 0.20
        },
        nameShimmer: {
            width: wp('25%'),
            height: hp('6%'),
            backgroundColor: '#E7E5E7',
            marginBottom: 2,
        },
        tagLine: {
            fontSize: hp('2%'),
            fontFamily: 'Avenir-Medium',
            alignItems: 'center',
            color: theme.colors.text,
        },
        tagLineShimmer: {
            width: wp('40%'),
            height: hp('4%'),
            backgroundColor: '#E7E5E7',
        },
        listCaption: {
            marginTop: hp('2%'),
            fontSize: hp('2%'),
            fontFamily: 'Avenir-Medium',
            alignItems: 'center',
            fontWeight: 'bold',
            color: theme.colors.text,
        },
        listCaptionShimmer: {
            width: wp('20%'),
            height: hp('3%'),
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
            marginTop: hp('0.5%'),
            color: theme.colors.primary,
        },
        flatList: {
            flexGrow: 1,
            marginTop: 10,
        },
        flatListLast: {
            flexGrow: 1,
            marginTop: 10,
            marginBottom: hp('3%'),
            justifyContent: 'center',
        },
        searchView: {
            marginTop:20,
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
            height: hp('5%'),
            backgroundColor: '#E7E5E7',
        },
        searchViewChildren: {
            margin: 2,
            marginLeft: 5,
            color: theme.colors.text,
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
