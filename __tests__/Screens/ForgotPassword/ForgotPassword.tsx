import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import ForgotPassword from 'screens/ForgotPassword/index'

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
