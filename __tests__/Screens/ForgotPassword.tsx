import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import * as redux from 'react-redux'
import { act } from 'react-test-renderer'
import ForgotPassword from 'screens/ForgotPassword/index'
import UserDetail from './../../app/screens/UserDetail/index'
import images from 'config/images'

jest.mock('react-redux', () => {
    return {
        __esModule: true,
        A: true,
        useDispatch: jest.fn(),
        useSelector: jest.fn(),
        default: 'mockedDefaultExport',
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
jest.mock('@react-navigation/core', () => {
    return {
        __esModule: true,
        A: true,
        useNavigation: jest.fn(),
        navigation: { navigate: jest.fn() },

        default: 'mockedDefaultExport',
    }
})
jest.mock('./../../app/config/images', () => {
    return {
        __esModule: true,
        A: true,
        images: jest.fn(),
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
jest.mock('./../../app/config/images', () => {
    return {
        __esModule: true,
        A: true,
        app: { logo: jest.fn() },
        default: 'mockedDefaultExport',
    }
})

describe('Component testing', () => {
    test('Snapshot ', async () => {
        const tree = render(<ForgotPassword />)
        expect(tree).toMatchSnapshot()
    })
})
