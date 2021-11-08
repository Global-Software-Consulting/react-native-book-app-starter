import { useIsFocused } from '@react-navigation/native'
import { render } from '@testing-library/react-native'
import React from 'react'
import * as redux from 'react-redux'
import Linking from 'react-native'
import { act } from 'react-test-renderer'
import DeviceInfo from 'react-native-device-info'
import Container from 'screens/BookDetail/Container'
jest.mock('react-native', () => {
    return {
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        openURL: jest.fn(),
        canOpenURL: jest.fn(),
        getInitialURL: jest.fn(),
    }
})

jest.mock('react-native', () => ({
    NetInfo: {
        addEventListener: jest.fn(),
        fetch: () => {
            return {
                done: jest.fn(),
            }
        },
    },
    NativeModules: {
        RNPasscodeStatus: {
            supported: jest.fn(),
            status: jest.fn(),
            get: jest.fn(),
        },
    },
    Dimensions: {
        get: () => ({
            width: jest.fn(),
            height: jest.fn(),
        }),
    },
}))

jest.mock('./../../../app/screens/BookDetail/types', () => {
    return {
        props: { route: { params: jest.fn() } },
    }
})
jest.mock('react-native-device-info', () => {
    return {
        DeviceInfo: jest.fn(),
        isTablet: jest.fn(),
    }
})
jest.mock('react-native-paper', () => {
    return {
        Button: jest.fn(),
        Text: jest.fn(),
        useTheme: jest.fn(),
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
        const tree = render(<Container />)
        expect(tree).toMatchSnapshot()
    })
})
