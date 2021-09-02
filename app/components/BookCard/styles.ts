import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
 paddingVertical:45,
 paddingHorizontal:30,
 backgroundColor:'white',
  },
  nameStyle: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
    fontFamily: 'Avenir-Medium',
    alignItems:'center'
  
  },
  tagLineStyle: {
    fontSize: hp('2%'),
    fontFamily: 'Avenir-Medium',
    alignItems:'center'
  
  },
  listCaptionStyle: {
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
  marginTop:10
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
  margin:5
},

heartIconTrending:
{
  position: 'absolute',
  marginVertical:hp('21%'),
  marginHorizontal:hp('1%')
},
textTitle:
{
  maxWidth: wp('30%')
},
heartIconGeneral:
{
  position: 'absolute',
  marginVertical:hp('16%'),
  marginHorizontal:hp('1%')
}

});
export default styles;
