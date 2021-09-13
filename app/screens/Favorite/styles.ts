import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import {useTheme} from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const useStyles = () => {

const theme = useTheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
 paddingVertical:45,
 paddingHorizontal:10,
  },
  favoriteView:
  {
    flex: 1
  },
  bookmark:
  {
    margin: 2
  },
  imageError:
  {
    height: hp('50%'),
    width: wp('50%'),
  },
  name: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
    fontFamily: 'Avenir-Medium',
    alignItems:'center'
  
  },
  tagLine: {
    fontSize: hp('2%'),
    fontFamily: 'Avenir-Medium',
    alignItems:'center'
  
  },
  listCaption: {
    marginTop: 15,
    fontSize: hp('2%'),
    fontFamily: 'Avenir-Medium',
    alignItems:'center',
    fontWeight:'bold'
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
  marginTop:10,
  flexDirection: 'column',
  marginBottom: 40,
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
