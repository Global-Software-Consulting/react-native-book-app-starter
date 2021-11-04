import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import Login from './../../app/screens/Login/index';
import * as redux from 'react-redux';
import { act } from 'react-test-renderer';

jest.mock('react-redux', () => {
    return {
        __esModule: true,
        A: true,
        useDispatch: jest.fn(),
        useSelector: jest.fn(),
        default: 'mockedDefaultExport',
    };
});
jest.mock('./../../app/config/images', () => {
    return {
        __esModule: true,
        A: true,
        images: {
            app: {
                logo: 'abc',
            },
        },
        default: 'mockedDefaultExport',
    };
});
jest.mock('react-native-keyboard-aware-scroll-view', () => {
    return {
        __esModule: true,
        A: true,
        KeyboardAwareScrollView: jest.fn(),
        default: 'mockedDefaultExport',
    };
});
jest.mock('react-native-linear-gradient', () => {
    return {
        __esModule: true,
        A: true,
        LinearGradient: jest.fn(),
        default: 'mockedDefaultExport',
    };
});

jest.mock('@react-navigation/core', () => {
    return {
        __esModule: true,
        A: true,
        useNavigation: jest.fn(),
        default: 'mockedDefaultExport',
    };
});
describe('Component testing', () => {
    test('Snapshot', async () => {
        const tree = render(<Login />);
        expect(tree).toMatchSnapshot();
        // const state = { loadingReducer: { isLoading: true } };
        // const isLoading = jest.spyOn(redux, 'useSelector').mockImplementation((val) => {
        //     console.log('here>', val);
        //     val(state);
        // });
        // isLoading.mockClear();
    });
});
