import { Center } from 'native-base';
import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { heightPercentageToDP, heightPercentageToDP as hp, widthPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const useStyles = () => {

const theme = useTheme();
const styles = StyleSheet.create({
  container:
  {
    flex:1,
    backgroundColor: 'white',
  },
  dropDown: {
width:wp('80%'),
alignSelf:'center',
borderRadius:20,
marginTop:10,

  },
  displayPicture:
  {
    height:heightPercentageToDP('15%'),
    width:widthPercentageToDP('30%'),
    marginVertical:20,
    borderRadius:40,
    backgroundColor:'transparent'

  },
  horizontalRuler: {
   borderBottomWidth: 2,
    marginTop: 3,
    color: 'gray',
    borderBottomColor:'red'
  },
  mainHeading:
  {
  fontWeight:'bold',
  color:theme.colors.text,
  fontSize:25,
  marginTop:20,
  marginBottom:20
  },
  subHeading:
  {
    fontWeight:'bold',
    color:theme.colors.text
  },
  inputField:
  {
    width:wp('50%'),
    color:'black',
    height: 40
  },
  infoView:
  {
    marginBottom:10    ,
    borderWidth:1,
    borderColor:theme.colors.text,
    borderRadius:20,
   alignItems:'center',
   justifyContent:'center',
    width: wp('80%'),
    height: 40
  },
  editView:
      {
        backgroundColor: '#E6E6FA',
        alignContent: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 20,
        borderRadius:20,
        alignItems:'center',
        textAlign:'center',
        color:theme.colors.text,
        padding:10,
        marginBottom:30
        
      
      },
editButton:
    {
    alignSelf:'center',
    justifyContent:'center',
      marginTop: 5,
    },


});
return styles;
}
