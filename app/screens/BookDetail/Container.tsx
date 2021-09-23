import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';
import BookCard from '../../components/BookCard/BookCard';
import { useStyles } from './styles';
import { Props } from './types';

const Container: React.FC<Props> = (props) => {
    //theme handling
    const styles = useStyles();
    const { books } = props;
    const author = 'Dummy author';
    const genre = 'Dummy Genre';
    const pages = books.numberOfPages ?? '111';
    const launched = books.createdAt ?? '11-11-11';
    const title = books.title ?? 'Dummy Title';
    const { t } = useTranslation();
    const [textShown, setTextShown] = useState(false); //To show ur remaining Text

    const toggleNumberOfLines = () => {
        //To toggle the show text or hide it
        setTextShown(!textShown);
    };
    return (
        <View style={styles.main}>
            <ScrollView>
                <BookCard
                    styleSelect="ExtraLarge"
                    bookTitle={title}
                    authorName={author}
                    hideIcon={true}
                    url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoE4lMLbADvLAxUvZf5ZAGvHUZ3KpBWFTW1g&usqp=CAU"
                />

                <View style={styles.horizontalRuler} />

                <View style={styles.mainView}>
                    <View style={styles.subView}>
                        <Text style={styles.genreText}>{t('Genre')}</Text>
                        <Text style={styles.dynamicGenreText}>{genre}</Text>
                    </View>

                    <View style={styles.launchedSubView}>
                        <Text style={styles.launchedText}> {t('Launched')}</Text>
                        <Text style={styles.dynamicLaunchedText}>{launched.substring(0, 9)}</Text>
                    </View>

                    <View style={styles.pagesSubView}>
                        <Text style={styles.sizeText}>{t('Size')}</Text>
                        <Text style={styles.dynamicSize}>
                            {pages}
                            {t(' pages')}
                        </Text>
                    </View>
                </View>

                <View style={styles.synopseView}>
                    <Text style={styles.synopseText}>{t('Synopse')}</Text>
                    <Text
                        style={styles.dynamicSynopse}
                        onPress={toggleNumberOfLines}
                        numberOfLines={textShown ? undefined : 2}>
                        {books.shortSummary}
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default Container;
