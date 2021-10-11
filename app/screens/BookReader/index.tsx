import React from 'react';
import { View } from 'react-native';
import Pdf from 'react-native-pdf';
import { useStyles } from './styles';
const BookReader: React.FC = () => {
    const src = {
        uri: 'https://www.adelaide.edu.au/writingcentre/sites/default/files/docs/learningguide-articlesinenglishgrammar.pdf',
    };
    const styles = useStyles();

    return (
        <View style={styles.mainView}>
            <Pdf source={src} style={styles.pdfView} />
        </View>
    );
};
export default BookReader;
