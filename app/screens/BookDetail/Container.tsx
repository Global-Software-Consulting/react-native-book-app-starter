import { useNavigation } from '@react-navigation/core'
import { dummyImages } from 'assets/dummyImages'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NativeEventEmitter, NativeModules, ScrollView, TouchableOpacity, View } from 'react-native'
import { Button, Text } from 'react-native'
import Tts from 'react-native-tts'
import BookCard from '../../components/BookCard/BookCard'
import { useStyles } from './styles'
import { Props } from './types'

const Container: React.FC<Props> = (props) => {
    const generateRandomURL = () => {
        const number = Math.random() * 6
        const index = Math.floor(number)
        return dummyImages[index]
    }
    //theme handling
    const styles = useStyles()
    const navigation = useNavigation()
    const { books } = props
    const author = 'Dummy author'
    const genre = 'Dummy Genre'
    const pages = books?.numberOfPages ?? '111'
    const launched = books?.createdAt ?? '11-11-11'
    const title = books?.title ?? 'Dummy Title'
    const { t } = useTranslation()
    const [textShown, setTextShown] = useState(false) //To show ur remaining Text
    const [isSpeaking, setIsSpeaking] = useState(false)

    const toggleNumberOfLines = () => {
        //To toggle the show text or hide it
        setTextShown(!textShown)
    }

    return (
        <View style={styles?.main}>
            <ScrollView>
                <BookCard
                    id={books?.id ?? 1}
                    styleSelect="ExtraLarge"
                    bookTitle={title}
                    authorName={author}
                    hideIcon={true}
                    url={generateRandomURL()}
                />
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <View style={styles.submitView}>
                        <TouchableOpacity
                            testID={'play'}
                            onPress={() => {
                                setIsSpeaking(!isSpeaking)
                                if (isSpeaking) {
                                    Tts.speak(books?.shortSummary)
                                } else {
                                    Tts.stop()
                                }
                            }}>
                            <Text style={{ color: 'white', fontSize: 16 }}>
                                {isSpeaking ? 'Play' : 'Pause'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.submitView}>
                        <TouchableOpacity
                            testID={'navigate'}
                            onPress={() => navigation.navigate('BookReader' as never)}>
                            <Text style={{ color: 'white', fontSize: 16 }}>Read Book</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles?.horizontalRuler} />

                <View style={styles?.mainView}>
                    <View style={styles?.subView}>
                        <Text style={styles?.genreText}>{t('Genre')}</Text>
                        <Text style={styles?.dynamicGenreText}>{genre}</Text>
                    </View>

                    <View style={styles?.launchedSubView}>
                        <Text style={styles?.launchedText}> {t('Launched')}</Text>
                        <Text style={styles?.dynamicLaunchedText}>{launched.substring(0, 9)}</Text>
                    </View>

                    <View style={styles?.pagesSubView}>
                        <Text style={styles?.sizeText}>{t('Size')}</Text>
                        <Text style={styles?.dynamicSize}>
                            {pages}
                            {t(' pages')}
                        </Text>
                    </View>
                </View>

                <View style={styles?.synopseView}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles?.synopseText}>{t('Synopse')}</Text>
                    </View>
                    <Text
                        testID={'toggle'}
                        style={styles?.dynamicSynopse}
                        onPress={toggleNumberOfLines}
                        numberOfLines={textShown ? undefined : 2}>
                        {books?.shortSummary}
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Container
