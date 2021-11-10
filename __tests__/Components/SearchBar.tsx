import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import SearchBar from './../../app/components/SearchBar/index'

describe('Component testing', () => {
    test('Snapshot', () => {
        const tree = render(<SearchBar />)
        expect(tree).toMatchSnapshot()
    })
    test('search action', () => {
        const { getByTestId } = render(<SearchBar />)
        // fireEvent.press(getByTestId('search'));
        fireEvent.press(getByTestId('searchBookies'))
    })
    test('search input change', () => {
        const { getByTestId } = render(<SearchBar />)
        // fireEvent.press(getByTestId('search'));
        fireEvent.changeText(getByTestId('searchInput'))
    })
    test('search input change', () => {
        const { getByTestId } = render(<SearchBar />)
        // fireEvent.press(getByTestId('search'));
    })
})
