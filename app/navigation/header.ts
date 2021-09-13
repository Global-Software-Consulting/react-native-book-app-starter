import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import {useTheme} from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const useStyles = () => {

const theme = useTheme();

const styles = StyleSheet.create({
  Header:
  {
    backgroundColor:theme.colors.background
  },
  Icon:
  {

   paddingLeft: 10,
   color:theme.colors.primary
  }
  });
return styles;
}

