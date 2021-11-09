import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import BookReader from 'screens/BookReader'
import * as redux from 'react-redux'
import Toast from 'react-native-simple-toast'
import { useDispatch } from 'react-redux'

describe('Component testing', () => {
    test('Snapshot ', async () => {
        const tree = render(<BookReader />)
        expect(tree).toMatchSnapshot()
    })
})
