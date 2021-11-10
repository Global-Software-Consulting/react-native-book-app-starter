import { useIsFocused, useNavigation } from '@react-navigation/native'
import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import * as redux from 'react-redux'

import { act } from 'react-test-renderer'
import Container from 'screens/BookDetail/Container'
import * as utils from 'utils/dimentionUtil'
import { getPercentageHeight, getPercentageWidth } from 'utils/dimentionUtil'
const DeviceTypeUtilsMock = jest.requireMock('utils/dimentionUtil')
import 'react-native-gesture-handler/jestSetup'

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('./../../../app/utils/dimentionUtil', () => {
    return {
        getPercentageHeight: jest.fn(),
        height: 100,
        getPercentageWidth: jest.fn(),
    }
})

describe('Component testing', () => {
    test('Snapshot ', () => {
        const height = jest.fn()
        getPercentageHeight.mockReturnValue(jest.fn())
        const width = jest.fn()
        getPercentageWidth.mockReturnValue(jest.fn())
        const tree = render(<Container books={['abc']} base_url="abc.com" />)
        expect(tree).toMatchSnapshot()
    })

    test('Fire toggle text ', () => {
        const height = jest.fn()
        getPercentageHeight.mockReturnValue(jest.fn())
        const width = jest.fn()
        getPercentageWidth.mockReturnValue(jest.fn())
        const { getByTestId } = render(<Container />)
        fireEvent.press(getByTestId('toggle'))
    })

    test('Fire toggle text ', () => {
        const height = jest.fn()
        getPercentageHeight.mockReturnValue(jest.fn())
        const width = jest.fn()
        getPercentageWidth.mockReturnValue(jest.fn())

        const { getByTestId } = render(<Container />)
        fireEvent.press(getByTestId('navigate'))
    })

    test('Fire toggle text ', () => {
        const height = jest.fn()
        getPercentageHeight.mockReturnValue(jest.fn())
        const width = jest.fn()
        getPercentageWidth.mockReturnValue(jest.fn())

        const { getByTestId } = render(<Container />)
        fireEvent.press(getByTestId('play'))
    })
})
