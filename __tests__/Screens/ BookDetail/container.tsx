import { useIsFocused, useNavigation } from '@react-navigation/native'
import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import * as redux from 'react-redux'

import { act } from 'react-test-renderer'
import Container from 'screens/BookDetail/Container'
import * as utils from 'utils/dimentionUtil'
import { getPercentageHeight, getPercentageWidth } from 'utils/dimentionUtil'
const DeviceTypeUtilsMock = jest.requireMock('utils/dimentionUtil')
import 'react-native-gesture-handler/jestSetup'

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('./app/utils/dimentionUtil', () => {
    return {
        getPercentageHeight: jest.fn(),
        height: 100,
        getPercentageWidth: jest.fn(),
    }
})
// jest.mock('react-native', () => {
//     return {
//         NativeEventEmitter: jest.fn(),
//         NativeModules: jest.fn(),
//         StyleSheet: {
//             create: () => ({}),
//         },
//         Dimensions: {
//             get: () => ({
//                 width: jest.fn(),
//                 height: jest.fn(),
//             }),
//         },
//     }
// })

jest.mock('@react-navigation/core', () => {
    const actualNav = jest.requireActual('@react-navigation/core')
    return {
        ...actualNav,
        useNavigation: () => ({
            navigate: jest.fn(),
            dispatch: jest.fn(),
        }),
        useIsFocused: jest.fn(),
    }
})
jest.mock('react-native-image-crop-picker', () => {
    return {
        __esModule: true,
        A: true,
        useDispatch: jest.fn(),
        default: 'mockedDefaultExport',
    }
})

jest.mock('react-native-keyboard-aware-scroll-view', () => {
    return {
        __esModule: true,
        A: true,
        KeyboardAwareScrollView: jest.fn(),
        default: 'mockedDefaultExport',
    }
})
jest.mock('react-native-linear-gradient', () => {
    return {
        __esModule: true,
        A: true,
        LinearGradient: jest.fn(),
        default: 'mockedDefaultExport',
    }
})
jest.mock('./../../../app/config/images', () => {
    return {
        __esModule: true,
        A: true,
        app: { logo: jest.fn() },
        default: 'mockedDefaultExport',
    }
})

jest.mock('react-native-tts', () => {
    return {
        __esModule: true,
        A: true,
        Tts: jest.fn(),
        default: 'mockedDefaultExport',
    }
})

describe('Component testing', () => {
    test('Snapshot ', () => {
        const height = jest.fn()
        getPercentageHeight.mockReturnValue(jest.fn())
        const width = jest.fn()
        getPercentageWidth.mockReturnValue(jest.fn())
        const tree = render(<Container books={['abc']} base_url="abc.com" />)
        expect(tree).toMatchSnapshot()
    })

    test('Fire toggle text ', () => {
        const height = jest.fn()
        getPercentageHeight.mockReturnValue(jest.fn())
        const width = jest.fn()
        getPercentageWidth.mockReturnValue(jest.fn())
        const { getByTestId } = render(<Container />)
        fireEvent.press(getByTestId('toggle'))
    })

    test('Fire toggle text ', () => {
        const height = jest.fn()
        getPercentageHeight.mockReturnValue(jest.fn())
        const width = jest.fn()
        getPercentageWidth.mockReturnValue(jest.fn())

        const { getByTestId } = render(<Container />)
        fireEvent.press(getByTestId('navigate'))
    })

    test('Fire toggle text ', () => {
        const height = jest.fn()
        getPercentageHeight.mockReturnValue(jest.fn())
        const width = jest.fn()
        getPercentageWidth.mockReturnValue(jest.fn())

        const { getByTestId } = render(<Container />)
        fireEvent.press(getByTestId('play'))
    })
})
