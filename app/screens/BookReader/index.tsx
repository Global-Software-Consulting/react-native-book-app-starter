import React from 'react'
import { View } from 'react-native'
<<<<<<< HEAD
// import Pdf from 'react-native-pdf';
=======
import Pdf from 'react-native-pdf'
>>>>>>> 44ebcc3db372a8f9d63d4872f4fe55409e5c797f
import { useStyles } from './styles'
const BookReader: React.FC = () => {
    const src = {
        uri: 'https://www.adelaide.edu.au/writingcentre/sites/default/files/docs/learningguide-articlesinenglishgrammar.pdf',
    }
    const styles = useStyles()

<<<<<<< HEAD
    return <View style={styles.mainView}>{/* <Pdf source={src} style={styles.pdfView} /> */}</View>
=======
    return (
        <View style={styles.mainView}>
            <Pdf source={src} style={styles.pdfView} />
        </View>
    )
>>>>>>> 44ebcc3db372a8f9d63d4872f4fe55409e5c797f
}
export default BookReader
