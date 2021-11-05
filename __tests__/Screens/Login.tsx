import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import { act } from 'react-test-renderer'
import Login from './../../app/screens/Login/index'

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
        images: {
            app: {
                logo: 'abc',
            },
        },
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

describe('Component testing', () => {
    test('Snapshot', async () => {
        const tree = render(<Login />)
        expect(tree).toMatchSnapshot()
    })
    test('Snapshot', async () => {
        // const { getByTestId } = render(<Login />)
        // act(() => {
        //     const navigation = {
        //         navigate: () => {
        //             return 'a'
        //         },
        //     }
        //     fireEvent.press(getByTestId('signup'))
        // })
    })
    test('email text change', async () => {
        const { getByTestId } = render(<Login />)
        act(() => {
            fireEvent.changeText(getByTestId('email'))
        })
    })

    test('password text change', async () => {
        const { getByTestId } = render(<Login />)
        act(() => {
            fireEvent.changeText(getByTestId('password'))
        })
    })
    test('submit button ', async () => {
        const { getByTestId } = render(<Login />)
        act(() => {
            fireEvent.press(getByTestId('submit'), {
                email: 'check@gmail.com',
                password: 'acdjssj',
            })
        })
    })
})
