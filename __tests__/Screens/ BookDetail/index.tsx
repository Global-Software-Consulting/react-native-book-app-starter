import { useIsFocused } from '@react-navigation/core'
import { render } from '@testing-library/react-native'
import React from 'react'
import * as getDetail from 'services/getBookDetail'

import * as redux from 'react-redux'
import { act } from 'react-test-renderer'
import BookDetail from 'screens/BookDetail/index'
import {} from './../../../app/config/images'
import { useDispatch } from 'react-redux'
jest.useFakeTimers
jest.mock('./../../../app/services/getBookDetail', () => {
    return {
        getBookDetail: jest.fn({ status: 'notSucess', result: 'ds' }),
    }
})

jest.mock('./../../../app/screens/BookDetail/types', () => {
    return {
        props: { route: { params: jest.fn() } },
    }
})

jest.mock('@react-navigation/core', () => {
    return {
        useIsFocused: jest.fn(),
    }
})

jest.mock('react-native-image-crop-picker', () => {
    return {
        __esModule: true,
        A: true,
        useDispatch: jest.fn(),
        default: 'mockedDefaultExport',
    }
})

jest.mock('react-native-keyboard-aware-scroll-view', () => {
    return {
        __esModule: true,
        A: true,
        KeyboardAwareScrollView: jest.fn(),
        default: 'mockedDefaultExport',
    }
})
jest.mock('react-native-linear-gradient', () => {
    return {
        __esModule: true,
        A: true,
        LinearGradient: jest.fn(),
        default: 'mockedDefaultExport',
    }
})
jest.mock('./../../../app/config/images', () => {
    return {
        __esModule: true,
        A: true,
        app: { logo: jest.fn() },
        default: 'mockedDefaultExport',
    }
})

jest.mock('react-native-tts', () => {
    return {
        __esModule: true,
        A: true,
        Tts: jest.fn(),
        default: 'mockedDefaultExport',
    }
})

describe('Component testing', () => {
    beforeAll(() => {
        const dispatch = jest.fn()
        useDispatch.mockReturnValue(jest.fn())
    })
    test('Snapshot ', () => {
        let state = { params: 'abc' }
        const tree = render(<BookDetail route={state} />)
        state = { params: 'cde' }
        expect(tree).toMatchSnapshot()
    })

    test('Service test with success response', () => {
        let response = { status: 'success' }
        const mockSendOtpCodeByUserCode = jest
            .spyOn(getDetail, 'getBookDetail')
            .mockImplementation(() => Promise.resolve(responseMock))
        const tree = render(<BookDetail />)
    })
})
