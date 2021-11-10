import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { act } from 'react-test-renderer'
import Login from '../../../app/screens/Login/index'
jest.useFakeTimers()

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

describe('Component testing', () => {
    test('Snapshot', async () => {
        const tree = render(<Login />)
        expect(tree).toMatchSnapshot()
    })
    test('submit button with wrong email and password ', async () => {
        const dispatch = jest.fn()
        useDispatch.mockReturnValue(jest.fn())
        const { getByTestId } = render(<Login />)
        fireEvent.changeText(getByTestId('email'), 'dsa')
        fireEvent.changeText(getByTestId('password'), 'fdsa')

        fireEvent.press(getByTestId('submit'))
    })

    test('submit button with email and password ', async () => {
        const dispatch = jest.fn()
        useDispatch.mockReturnValue(jest.fn())
        const { getByTestId } = render(<Login />)
        fireEvent.changeText(getByTestId('email'), 'dsa@gmail.com')
        fireEvent.changeText(getByTestId('password'), 'fdsa')

        fireEvent.press(getByTestId('submit'))
    })
    test('submit button ', async () => {
        const { getByTestId } = render(<Login />)
        act(() => {
            fireEvent.press(getByTestId('submit'))
        })
    })

    test('icon press event ', async () => {
        const { getByTestId } = render(<Login />)
        act(() => {
            fireEvent.press(getByTestId('iconEye'))
        })
    })

    test('icon press event ', async () => {
        const { getByTestId } = render(<Login />)
        act(() => {
            fireEvent.press(getByTestId('forgotPassword'))
        })
    })

    test('icon press event ', async () => {
        const { getByTestId } = render(<Login />)
        act(() => {
            fireEvent.press(getByTestId('signup'))
        })
    })
})
