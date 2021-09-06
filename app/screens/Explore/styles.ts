import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import {useTheme} from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const useStyles = () => {

const theme = useTheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
 paddingVertical:20,
 paddingHorizontal:30,
 backgroundColor: theme.colors.background
  },
  nameStyle: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
    fontFamily: 'Avenir-Medium',
    alignItems:'center',
    color: theme.colors.text
  
  },
  nameStyleShimmer: {
    width:wp('25%'),
    height:hp('6%'),
    backgroundColor: '#E7E5E7',
    marginBottom:2
  },
  tagLineStyle: {
    fontSize: hp('2%'),
    fontFamily: 'Avenir-Medium',
    alignItems:'center',
    color: theme.colors.text
  },
  tagLineStyleShimmer: {
    width:wp('40%'),
    height:hp('4%'),
    backgroundColor: '#E7E5E7',
  },
  listCaptionStyle: {
    marginTop: 15,
    fontSize: hp('2%'),
    fontFamily: 'Avenir-Medium',
    alignItems:'center',
    fontWeight:'bold',
    color: theme.colors.text
  },
listCaptionStyleShimmer: {
  width:wp('20%'),
    height:hp('3%'),
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
    marginTop: 3,
    color: theme.colors.primary

  },
flatList: {
  flexGrow: 1,
  marginTop:10,
  justifyContent:'center'
},
flatListLast: {
  flexGrow: 1,
  marginTop:10,
  marginBottom:hp('3%'),
  justifyContent:'center'
},

books: {
height:hp('2%'), width:wp('1%'),
borderRadius:4
},

bookTrending: {
  height:hp('25%'), width:wp('37%'),
  borderRadius:4
  },

  bookGeneral: {
    height:hp('20%'), width:wp('30%'),

    borderRadius:4
    },
bookView: {
  backgroundColor: 'transparent',
  paddingRight:20
}
});
return styles;
}

