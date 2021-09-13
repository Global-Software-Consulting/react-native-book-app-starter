import reducers from 'app/store/reducers';
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

    bookLarge: {
height:hp('30%'), width:wp('40%'),
    borderRadius:4,
    margin:10
    },
    bookLargeShimmer: {
      height:hp('30%'), width:wp('40%'),
          borderRadius:4,
          margin:10,
          backgroundColor: '#E7E5E7'

          },

    bookExtraLarge: {
      height:hp('40%'), width:wp('65%'),
          borderRadius:4,
          margin:10,
          alignSelf: 'center'
          
          },

    bookTrendingShimmer: {
      height:hp('25%'), width:wp('37%'),
      borderRadius:4,
      backgroundColor: '#E7E5E7'
      
      },
      bookTrendingExtraLargeShimmer: {
        height:hp('45%'), width:wp('60%'),
        borderRadius:4,
        backgroundColor: '#E7E5E7',
        alignSelf:'center'
        },
    
      textTitleEnlarged: {
        fontSize:30,
        maxWidth: wp('60%'),
        fontWeight:'500',
        alignSelf:'center'
      },
      authorTitleEnlarged:
{
  maxWidth: wp('55%'),
  color:'red',
fontWeight:'300',
alignSelf:'center',
fontSize:20
},

    bookGeneralShimmer: {
        height:hp('20%'), width:wp('30%'),
        borderRadius:4,
        backgroundColor: '#E7E5E7'
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
  maxWidth: wp('30%'),
  fontWeight:'bold',
  alignSelf:'center'

},
authorTitle:
{
  maxWidth: wp('30%'),
fontWeight:'200',
alignSelf:'center'
},
textTitleShimmer:
{
  width: wp('30%'),
  backgroundColor: '#E7E5E7',
  marginTop:2,
  alignSelf:'center'


},
heartIconGeneral:
{
  position: 'absolute',
  marginVertical:hp('16%'),
  marginHorizontal:hp('1%')
}

});
export default styles;
