import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { getPercentageWidth, getPercentageHeight } from 'utils/dimentionUtil';

export const useStyles = () => {
    const width = getPercentageWidth();
    const height = getPercentageHeight();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const styles = StyleSheet.create({
        mainView:
            {  backgroundColor: 'white', alignSelf: 'center' },
        closeText:
            { color: 'red', alignSelf: 'center' },
        image:
            { width: windowHeight > windowWidth ? width('90') : height('80%'), height:windowHeight > windowWidth ? height('50%') : width('30%') },
        closeButton: {
            alignContent: 'center',
            alignItems: 'center',
            
        },
        text:
        {
            color: 'red',
            fontWeight: 'bold',
            marginBottom:20
        }
        
        
    });
    return styles;
};
