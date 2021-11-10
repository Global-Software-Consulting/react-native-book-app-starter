import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import PictureViewer from './../../app/components/PictureViewer/index'

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
