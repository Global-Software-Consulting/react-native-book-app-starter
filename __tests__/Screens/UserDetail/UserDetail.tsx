import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import * as redux from 'react-redux'
import { act } from 'react-test-renderer'
import UserDetail from '../../../app/screens/UserDetail/index'

describe('Component testing', () => {
    test('Snapshot ', async () => {
        const tree = render(<UserDetail />)
        act(() => {
            const state = {
                loadingReducer: { isLoading: true },
                loginReducer: { user: 'as' },
            }
            jest.spyOn(redux, 'useSelector').mockImplementation((val) => {
                val(state)
                expect(tree).toMatchSnapshot()
            })
        })
    })

    test('pressing update without adding any information', () => {
        const { getByTestId } = render(<UserDetail />)
        fireEvent.press(getByTestId('update'))
    })

    test('pressing update with information filled in', () => {
        const { getByTestId } = render(<UserDetail />)
        fireEvent.press(getByTestId('update'))

        fireEvent.changeText(getByTestId('firstname'), '123frfr')
        fireEvent.changeText(getByTestId('email'), '123frfr')

        fireEvent.changeText(getByTestId('lastname'), '123frfr')

        fireEvent.press(getByTestId('update'))
    })

    test('menu trigger', () => {
        const { getByTestId } = render(<UserDetail />)
        fireEvent.press(getByTestId('menu'))
    })

    test('menu option', () => {
        const { getByTestId } = render(<UserDetail />)
        fireEvent.press(getByTestId('menuOption'))
    })
})
