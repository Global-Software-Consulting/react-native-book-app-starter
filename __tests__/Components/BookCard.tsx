import { act, fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import * as redux from 'react-redux'
import BookCard from './../../app/components/BookCard/BookCard'

describe('Component testing', () => {
    afterEach(() => {
        jest.clearAllMocks()
    })

    test('Snapshot', () => {
        const tree = render(<BookCard id="ab" url="abc.com" styleSelect="custom" hideIcon={true} />)
        act(() => {
            expect(tree).toMatchSnapshot()
        })
    })
    test('test with passing favoritebook variable', () => {
        const { getByTestId } = render(<BookCard id={2} />)

        act(() => {
            const state = { appReducer: { favorite: { bookId: 2 } } }
            const isFocussed = jest.spyOn(redux, 'useSelector').mockImplementation((val) => {
                val(state)
            })
            fireEvent.press(getByTestId('heart'))
        })
        // fireEvent.press(getByTestId('search'));
    })

    test('Fireevent heart', async () => {
        const { getByTestId } = render(<BookCard />)

        act(() => {
            fireEvent.press(getByTestId('heart'))
        })
    })
    test('Fireevent heart click with a book id of 2', async () => {
        const state = { appReducer: { favorite: [{ bookId: 2 }] } }
        jest.spyOn(redux, 'useSelector').mockImplementation((val) => {
            val(state)
        })
        const { getByTestId } = render(<BookCard id={2} />)

        act(() => {
            fireEvent.press(getByTestId('heart'))
            fireEvent.press(getByTestId('heart'))
            fireEvent.press(getByTestId('heart'))
        })
    })
})
