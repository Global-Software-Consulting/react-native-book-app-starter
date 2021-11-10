import { render } from '@testing-library/react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import BookDetail from 'screens/BookDetail/index'
import * as getDetail from 'services/getBookDetail'
import {} from './../../../app/config/images'
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
