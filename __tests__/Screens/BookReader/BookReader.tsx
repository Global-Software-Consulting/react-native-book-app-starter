import { render } from '@testing-library/react-native'
import React from 'react'
import BookReader from 'screens/BookReader'

describe('Component testing', () => {
    test('Snapshot ', async () => {
        const tree = render(<BookReader />)
        expect(tree).toMatchSnapshot()
    })
})
