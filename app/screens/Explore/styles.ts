import { StyleSheet } from 'react-native';
import { white } from 'react-native-paper/lib/typescript/styles/colors';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    flex: 1,
 paddingVertical:45,
 paddingHorizontal:30,
 backgroundColor:'white',
  },
  nameStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Avenir-Medium',
    alignItems:'center'
  
  },
  tagLineStyle: {
    fontSize: 16,
    fontFamily: 'Avenir-Medium',
    alignItems:'center'
  
  },
  listCaptionStyle: {
    marginTop: 15,
    fontSize: 14,
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
height:220, width:140,
borderRadius:4
},

bookTrending: {
  height:220, width:140,
  borderRadius:4
  },

  bookGeneral: {
    height:160, width:100,
    borderRadius:4
    },
  
bookView: {
  backgroundColor: 'transparent',
  paddingRight:20
}
});
export default styles;
