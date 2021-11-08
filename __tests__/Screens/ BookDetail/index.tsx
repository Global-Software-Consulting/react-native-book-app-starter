import { useIsFocused } from '@react-navigation/native'
import { render } from '@testing-library/react-native'
import React from 'react'
import * as redux from 'react-redux'
import { act } from 'react-test-renderer'
import BookDetail from 'screens/BookDetail/index'
import {} from './../../../app/config/images'
jest.mock('./../../../app/screens/BookDetail/types', () => {
    return {
        props: { route: { params: jest.fn() } },
    }
})
jest.mock('react-native-device-info', () => {
    return {
        DeviceInfo: { isTablet: () => true },
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
        let state = { params: 'abc' }
        const tree = render(<BookDetail route={state} />)
        state = { params: 'cde' }
        expect(tree).toMatchSnapshot()
    })

    test('Snapshot ', () => {
        let state = { params: 'abc' }
        const tree = render(<BookDetail route={state} />)
        state = { params: 'cde' }
        expect(tree).toMatchSnapshot()
    })
})
