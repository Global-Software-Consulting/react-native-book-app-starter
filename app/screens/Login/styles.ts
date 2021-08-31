import { StyleSheet } from 'react-native';
import { ScreenStackHeaderRightView } from 'react-native-screens';
import AppStyles from "../../config/styles";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  darkcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  subcontainer: {
    // flex: 1,
    marginTop: "10%",
    width:"60%",
    height:"50%",
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems:'center',
    borderWidth:0.25,
    borderColor:AppStyles.colors.COLOR_DARK_SEPERATOR,
  },
  login: {
    margin: 12,

  },
  forgot: {
    color:AppStyles.colors.COLOR_BLACK,
    marginTop: 12,
  },
  labelStyle: {
    fontSize: 12,
  },
});

export default styles;
