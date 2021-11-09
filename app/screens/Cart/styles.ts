import { StyleSheet } from 'react-native';
import { getPercentageHeight, getPercentageWidth } from 'utils/dimentionUtil';
import { useTheme } from 'react-native-paper';
export const useStyles = () => {
    const height = getPercentageHeight();
    const width = getPercentageWidth();
    const theme = useTheme();

    const styles = StyleSheet.create({
        mainView:{
            flex: 1,
            alignItems: 'center',
            alignContent: 'center',
            backgroundColor:theme?.colors?.background
        },
        pdfView:
        { height:height('100%') , width: width('100%') }
        
    });
    return styles;
};
