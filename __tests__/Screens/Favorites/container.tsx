import { useIsFocused } from '@react-navigation/native'
import { render } from '@testing-library/react-native'
import React from 'react'
import 'react-native-gesture-handler/jestSetup'
import * as redux from 'react-redux'
import { act } from 'react-test-renderer'
import Container from 'screens/Favorite/Container'
import { getPercentageHeight, getPercentageWidth } from 'utils/dimentionUtil'

const DeviceTypeUtilsMock = jest.requireMock('utils/dimentionUtil')

jest.mock('./../../../app/utils/dimentionUtil', () => {
    return {
        getPercentageHeight: jest.fn(),
        height: '100',
        getPercentageWidth: jest.fn(),
    }
})

describe('Screen test', () => {
    test('Snapshot ', () => {
        const height = jest.fn()
        getPercentageHeight.mockReturnValue(jest.fn())
        const width = jest.fn()
        getPercentageWidth.mockReturnValue(jest.fn())

        const isFocused = jest.fn()
        useIsFocused.mockReturnValue(true)

        act(() => {
            const state = {
                loadingReducer: { isLoading: false },
                appReducer: { favorite: 'as' },
            }
            jest.spyOn(redux, 'useSelector').mockImplementation((val) => {
                val(state)
                expect(tree).toMatchSnapshot()
            })
        })
        const tree = render(<Container />)
    })

    test('Snapshot ', () => {
        const height = jest.fn()
        getPercentageHeight.mockReturnValue(jest.fn())
        const width = jest.fn()
        getPercentageWidth.mockReturnValue(jest.fn())
        act(() => {
            const state = {
                loadingReducer: { isLoading: false },
                appReducer: { favorite: ['as', 'bd', 'ef'] },
            }
            jest.spyOn(redux, 'useSelector').mockImplementation((val) => {
                val(state)
            })
        })
        const isFocused = jest.fn()
        useIsFocused.mockReturnValue(true)

        const { getByTestId } = render(<Container toDos={true} />)
    })
})
