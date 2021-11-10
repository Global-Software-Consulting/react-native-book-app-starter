import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import * as redux from 'react-redux'
import { act } from 'react-test-renderer'
import Signup from '../../../app/screens/Signup/index'
import { useDispatch } from 'react-redux'

jest.mock('@react-navigation/core', () => {
    return {
        __esModule: true,
        A: true,
        useNavigation: jest.fn(),
        navigation: { navigate: jest.fn() },

        default: 'mockedDefaultExport',
    }
})
jest.mock('./../../../app/config/images', () => {
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
jest.mock('./../../../app/config/images', () => {
    return {
        __esModule: true,
        A: true,
        app: { logo: jest.fn() },
        default: 'mockedDefaultExport',
    }
})

describe('Component testing', () => {
    test('Snapshot with loading as true', async () => {
        const tree = render(<Signup />)
        act(() => {
            const state = { loadingReducer: { isLoading: true } }
            const isFocussed = jest.spyOn(redux, 'useSelector').mockImplementation((val) => {
                val(state)
                isFocussed.mockClear()
            })
        })
        expect(tree).toMatchSnapshot()
    })
    test('Snapshot with loading as true', async () => {
        const tree = render(<Signup />)
        act(() => {
            const state = { loadingReducer: { isLoading: false } }
            const isFocussed = jest.spyOn(redux, 'useSelector').mockImplementation((val) => {
                val(state)
                isFocussed.mockClear()
            })
        })
        expect(tree).toMatchSnapshot()
    })
    test('firstname text change', async () => {
        const { getByTestId } = render(<Signup />)
        act(() => {
            fireEvent.changeText(getByTestId('firstname'))
        })
    })
    test('lastname text change', async () => {
        const { getByTestId } = render(<Signup />)
        act(() => {
            fireEvent.changeText(getByTestId('lastname'))
        })
    })
    test('email text change', async () => {
        const { getByTestId } = render(<Signup />)
        act(() => {
            fireEvent.changeText(getByTestId('email'))
        })
    })
    test('password text change', async () => {
        const { getByTestId } = render(<Signup />)
        act(() => {
            fireEvent.changeText(getByTestId('password'))
        })
    })
    test('submit details', async () => {
        const { getByTestId } = render(<Signup />)
        act(() => {
            fireEvent.press(getByTestId('submit'))
        })
    })
    test('submit with wrong email format', async () => {
        const dispatch = jest.fn()
        useDispatch.mockReturnValue(jest.fn())
        const { getByTestId } = render(<Signup />)
        act(() => {
            fireEvent.changeText(getByTestId('firstname'), 'dsa')
            fireEvent.changeText(getByTestId('lastname'), 'fdsa')

            fireEvent.changeText(getByTestId('email'), 'abcd')
            fireEvent.changeText(getByTestId('password'), '123frfr')

            fireEvent.press(getByTestId('submit'))
        })
    })

    test('submit with proper information filled in', async () => {
        const { getByTestId } = render(<Signup />)
        act(() => {
            fireEvent.changeText(getByTestId('firstname'), 'dsa')
            fireEvent.changeText(getByTestId('lastname'), 'fdsa')

            fireEvent.changeText(getByTestId('email'), 'abc@gmail.com')
            fireEvent.changeText(getByTestId('password'), '123frfr')

            fireEvent.press(getByTestId('submit'))
        })
    })
})
