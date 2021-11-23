/**
 * React Native .
 * Everything starts from the Entry-point
 */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ActivityIndicator, LogBox, Text, View } from 'react-native'
import CodePush from 'react-native-code-push'
import { Provider as PaperProvider } from 'react-native-paper'
import { MenuProvider } from 'react-native-popup-menu'
import SplashScreen from 'react-native-splash-screen'
import { Provider, useSelector } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { darkTheme, defaultTheme } from './config/theme'
import { IThemeState } from './models/reducers/theme'
import Navigator from './navigation'
import Modal from 'react-native-modal'

import configureStore from './store'
import addBookToFavoite from './services/addBookToFavoite'
const { persistor, store } = configureStore()

interface IState {
    themeReducer: IThemeState
}

const RootNavigation: React.FC = () => {
    const favoriteBooks = useSelector((state) => state.appReducer.favorite)
    const promises = [
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
        axios.get(
            'https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt'
        ),
    ]
    const promisesResolved = promises.map((promise) => promise.catch((error) => ({ error })))
    function checkFailed(then) {
        return function (responses) {
            const someFailed = responses.some((response) => response.error)

            if (someFailed) {
                throw responses
            }

            return then(responses)
        }
    }

    const [isLoading, setIsLoading] = useState(true)
    const storeInFavorites = async (id: number) => {
        addBookToFavoite(id).then((res) => {
            // console.log('response is', res)
        })
    }
    useEffect(() => {
        SplashScreen.hide()
        axios
            .all(promisesResolved)
            .then(
                checkFailed((responses) => {
                    console.log('SUCCESS', responses?.length)
                    setIsLoading(false)
                })
            )
            .catch((errors) => {
                // react on errors.
                console.log(errors[1].error)
                setIsLoading(false)
            })
        // for (let i = 0; i < favoriteBooks.length + 1; i++) {
        //     if (i > favoriteBooks.length - 1) {
        //         setIsLoading(false)
        //     } else {
        //         storeInFavorites(favoriteBooks[i].bookId)
        //     }
        // }
    })
    const isDark = useSelector((state: IState) => state.themeReducer.isDark)
    LogBox.ignoreLogs(['Warning: ...']) // Ignore log notification by message
    LogBox.ignoreAllLogs() //Ignore all log notifications
    return (
        <>
            <Modal isVisible={isLoading} style={{ backgroundColor: 'black' }}>
                <View
                    style={{
                        height: '15%',
                        width: '15%',
                        alignSelf: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text>Synchronizing!</Text>
                </View>
            </Modal>
            {!isLoading && (
                <PaperProvider theme={isDark ? darkTheme : defaultTheme}>
                    <Navigator />
                </PaperProvider>
            )}
        </>
    )
}

const EntryPoint: React.FC = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
                <MenuProvider>
                    <RootNavigation />
                </MenuProvider>
            </PersistGate>
        </Provider>
    )
}

export default CodePush({
    updateDialog: true,
    installMode: CodePush.InstallMode.IMMEDIATE,
})(EntryPoint)
