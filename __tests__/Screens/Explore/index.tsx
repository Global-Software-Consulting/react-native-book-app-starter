import { useIsFocused } from '@react-navigation/native'
import { render } from '@testing-library/react-native'
import React from 'react'
import 'react-native-gesture-handler/jestSetup'
import * as redux from 'react-redux'
import { act } from 'react-test-renderer'
import Explore from 'screens/Explore/index'
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
    test('Snapshot with loading as true ', () => {
        const height = jest.fn()
        getPercentageHeight.mockReturnValue(jest.fn())
        const width = jest.fn()
        getPercentageWidth.mockReturnValue(jest.fn())

        const isFocused = jest.fn()
        useIsFocused.mockReturnValue(true)

        act(() => {
            const state = {
                loadingReducer: { isLoading: true },
                loginReducer: { user: 'as' },
                appReducer: {
                    books: [
                        { averageRating: 2 },
                        { averageRating: 4 },
                        { averageRating: 5 },
                        { averageRating: 1 },
                        { averageRating: 3 },
                    ],
                },
            }
            jest.spyOn(redux, 'useSelector').mockImplementation((val) => {
                val(state)
                expect(tree).toMatchSnapshot()
            })
        })
        const tree = render(<Explore />)
    })

    test('Snapshot with loading as false ', () => {
        const height = jest.fn()
        getPercentageHeight.mockReturnValue(jest.fn())
        const width = jest.fn()
        getPercentageWidth.mockReturnValue(jest.fn())

        const isFocused = jest.fn()
        useIsFocused.mockReturnValue(true)

        act(() => {
            const state = {
                loadingReducer: { isLoading: false },
                loginReducer: { user: 'as' },
                appReducer: {
                    books: [
                        { averageRating: 2 },
                        { averageRating: 4 },
                        { averageRating: 5 },
                        { averageRating: 1 },
                        { averageRating: 3 },
                    ],
                },
            }
            jest.spyOn(redux, 'useSelector').mockImplementation((val) => {
                val(state)
                expect(tree).toMatchSnapshot()
            })
        })
        const tree = render(<Explore />)
    })
})
