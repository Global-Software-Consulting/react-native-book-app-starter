import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import PictureViewer from './../../app/components/PictureViewer/index'

jest.mock('react-native-modal', () => {
    return {
        __esModule: true,
        A: true,
        Modal: jest.fn(),
        default: 'mockedDefaultExport',
    }
})
jest.mock('react-redux', () => {
    return {
        __esModule: true,
        A: true,
        useDispatch: jest.fn(),
        default: 'mockedDefaultExport',
    }
})
describe('Component testing', () => {
    test('Snapshot', () => {
        const tree = render(<PictureViewer isVisible={true} imageSource={''} onPress={() => {}} />)
        expect(tree).toMatchSnapshot()
    })
    test('close action', () => {
        const { getByTestId } = render(
            <PictureViewer isVisible={true} imageSource={''} onPress={() => {}} />
        )
        // fireEvent.press(getByTestId('search'));
        fireEvent.press(getByTestId('close'))
    })
})
