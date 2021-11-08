import { act, fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import * as redux from 'react-redux'
import BookCard from './../../app/components/BookCard/BookCard'
import fetch, { Response } from 'node-fetch'
import addBookToFavoite from './../../app/services/addBookToFavoite'
jest.mock('react-native-modal', () => {
    return {
        __esModule: true,
        A: true,
        Modal: jest.fn(),
        default: 'mockedDefaultExport',
    }
})
jest.mock('./../../workaround/useEffect', () => {
    return { useEffect: require('react').useLayoutEffect }
})
jest.mock('react-native-paper', () => {
    return {
        __esModule: true,
        A: true,
        Text: jest.fn(),
        default: 'mockedDefaultExport',
    }
})
jest.mock('react-native-device-info', () => {
    return {
        DeviceInfo: { isTablet: () => true },
    }
})
jest.mock('react-native-paper', () => {
    return {
        Text: jest.fn(),
        useTheme: () => {
            return {
                theme: { colors: { highlight: jest.fn() } },
            }
        },
    }
})

jest.mock('react-native-device-info', () => {
    return {
        isTablet: jest.fn(),
    }
})

jest.mock('@react-navigation/native', () => {
    return {
        __esModule: true,
        A: true,
        useIsFocused: jest.fn(() => {
            isFocused = false
        }),
        default: 'mockedDefaultExport',
    }
})
jest.mock('react-native-fast-image', () => {
    return {
        __esModule: true,
        A: true,
        FastImage: jest.fn(),
        priority: {
            normal: 'normal',
        },
        default: 'mockedDefaultExport',
    }
})

jest.mock('react-redux', () => {
    return {
        __esModule: true,
        A: true,
        useDispatch: jest.fn(),
        useSelector: jest.fn(),
        default: 'mockedDefaultExport',
    }
})
jest.mock('React', () => ({
    ...jest.requireActual('React'),
    useEffect: jest.fn(),
}))
describe('Component testing', () => {
    afterEach(() => {
        jest.clearAllMocks()
    })

    test('Snapshot', () => {
        const tree = render(<BookCard id={1} url="abc.com" styleSelect="custom" hideIcon={true} />)
        act(() => {
            expect(tree).toMatchSnapshot()
        })
    })
    test('test with passing favoritebook variable', () => {
        const { getByTestId } = render(<BookCard />)

        act(() => {
            const state = { appReducer: { favorite: ['abc'] } }
            const isFocussed = jest.spyOn(redux, 'useSelector').mockImplementation((val) => {
                val(state)
                isFocussed.mockClear()
            })
        })
        // fireEvent.press(getByTestId('search'));
    })

    test('Fireevent heart', async () => {
        const { getByTestId } = render(<BookCard />)

        act(() => {
            fireEvent.press(getByTestId('heart'))
        })
    })
    test('Fireevent heart', async () => {
        const { getByTestId } = render(<BookCard />)

        act(() => {
            fireEvent.press(getByTestId('heart'))
            fireEvent.press(getByTestId('heart'))
        })
    })
})
