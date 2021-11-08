import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import ForgotPassword from 'screens/ForgotPassword/index'
import * as redux from 'react-redux'
import Toast from 'react-native-simple-toast'
import { useDispatch } from 'react-redux'

jest.mock('react-native-simple-toast', () => ({
    Toast: jest.fn(),
    default: { show: jest.fn() },
    reactNativeSimpleToast: { default: { show: jest.fn() } },
}))

jest.mock('react-redux', () => {
    return {
        __esModule: true,
        A: true,
        useDispatch: jest.fn(() => {}),
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
    test('reset pressed', async () => {
        const { getByTestId } = render(<ForgotPassword />)
        fireEvent.changeText(getByTestId('emailaddress'), 'sample@gmail.com')
        fireEvent.press(getByTestId('reset'))
    })
    test('reset pressed with wrong email format', async () => {
        const dispatch = jest.fn()
        useDispatch.mockReturnValue(jest.fn())
        const { getByTestId } = render(<ForgotPassword />)

        fireEvent.changeText(getByTestId('emailaddress'), 'sample')
        fireEvent.press(getByTestId('reset'))
    })
    test('reset pressed with no email', async () => {
        const dispatch = jest.fn()
        useDispatch.mockReturnValue(jest.fn())
        const { getByTestId } = render(<ForgotPassword />)

        fireEvent.press(getByTestId('reset'))
    })
})
