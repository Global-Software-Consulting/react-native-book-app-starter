import React from 'react'
import { Platform, View } from 'react-native'
// import Pdf from 'react-native-pdf';
import PDFView from 'react-native-view-pdf/lib/index'

import { useStyles } from './styles'
const resources = {
    file:
        Platform.OS === 'ios'
            ? 'downloadedDocument.pdf'
            : '/sdcard/Download/downloadedDocument.pdf',
    url: 'https://www.adelaide.edu.au/writingcentre/sites/default/files/docs/learningguide-articlesinenglishgrammar.pdf',
    base64: 'JVBERi0xLjMKJcfs...',
}
const BookReader: React.FC = () => {
    const src = {
        uri: 'https://www.adelaide.edu.au/writingcentre/sites/default/files/docs/learningguide-articlesinenglishgrammar.pdf',
    }
    const styles = useStyles()
    const resourceType = 'url'

    return (
        <View>
            <PDFView
                fadeInDuration={250.0}
                style={{ width: '100%', height: '100%' }}
                resource={resources[resourceType]}
                resourceType={resourceType}
            />
        </View>
    )
}
export default BookReader
