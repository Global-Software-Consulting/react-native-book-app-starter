import { useIsFocused } from '@react-navigation/native'
import { render } from '@testing-library/react-native'
import React from 'react'
import * as redux from 'react-redux'

import { act } from 'react-test-renderer'
import Container from 'screens/BookDetail/Container'
import * as utils from 'utils/dimentionUtil'
import { getPercentageHeight, getPercentageWidth } from 'utils/dimentionUtil'
const DeviceTypeUtilsMock = jest.requireMock('utils/dimentionUtil')

jest.mock('react-native-device-info', () => {
    return {
        DeviceInfo: { isTablet: jest.fn() },
        isTablet: jest.fn(),
    }
})
jest.mock('react-redux', () => {
    return {
        __esModule: true,
        A: true,
        useDispatch: jest.fn(),
        useSelector: jest.fn(),
        default: 'mockedDefaultExport',
    }
})
jest.mock('react-native-paper', () => {
    return {
        Text: jest.fn(),
        Button: jest.fn(),
        useTheme: jest.fn(),
    }
})
jest.mock('./../../../app/utils/dimentionUtil', () => {
    return {
        getPercentageHeight: jest.fn(),
        height: '100',
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
    return {
        useIsFocused: jest.fn(),
        useNavigation: jest.fn(),
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
})
