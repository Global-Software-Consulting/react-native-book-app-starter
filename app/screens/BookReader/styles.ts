import { StyleSheet } from 'react-native';
import { getPercentageHeight, getPercentageWidth } from 'utils/dimentionUtil';
export const useStyles = () => {
    const height = getPercentageHeight();
    const width = getPercentageWidth();


    const styles = StyleSheet.create({
        mainView:{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        pdfView:
        { height:height('100%') , width: width('100%') }
        
    });
    return styles;
};
