import React, { useEffect } from 'react';
import { act, fireEvent, render } from '@testing-library/react-native';
import BookCard from './../../app/components/BookCard/BookCard';
import * as redux from 'react-redux';
import * as navigation from '@react-navigation/native';
import { Provider } from 'react-redux';

import { NavigationContext } from '@react-navigation/native';
jest.mock('react-native-modal', () => {
    return {
        __esModule: true,
        A: true,
        Modal: jest.fn(),
        default: 'mockedDefaultExport',
    };
});
jest.mock('./../../workaround/useEffect', () => {
    return { useEffect: require('react').useLayoutEffect };
});
jest.mock('react-native-paper', () => {
    return {
        __esModule: true,
        A: true,
        Text: jest.fn(),
        default: 'mockedDefaultExport',
    };
});
jest.mock('react-native-device-info', () => {
    return {
        DeviceInfo: { isTablet: () => true },
    };
});
jest.mock('react-native-paper', () => {
    return {
        Text: jest.fn(),
        useTheme: () => {
            return {
                theme: { colors: { highlight: jest.fn() } },
            };
        },
    };
});

jest.mock('react-native-device-info', () => {
    return {
        isTablet: jest.fn(),
    };
});

jest.mock('@react-navigation/native', () => {
    return {
        __esModule: true,
        A: true,
        useIsFocused: jest.fn(() => {
            isFocused = false;
        }),
        default: 'mockedDefaultExport',
    };
});
jest.mock('react-native-fast-image', () => {
    return {
        __esModule: true,
        A: true,
        FastImage: jest.fn(),
        priority: {
            normal: 'normal',
        },
        default: 'mockedDefaultExport',
    };
});

jest.mock('react-redux', () => {
    return {
        __esModule: true,
        A: true,
        useDispatch: jest.fn(),
        useSelector: jest.fn(),
        default: 'mockedDefaultExport',
    };
});
jest.mock('React', () => ({
    ...jest.requireActual('React'),
    useEffect: jest.fn(),
}));
describe('Component testing', () => {
    test('Snapshot', () => {
        const tree = render(<BookCard id={1} url="abc.com" styleSelect="custom" hideIcon={true} />);

        expect(tree).toMatchSnapshot();
    });
    test('test with passing favoritebook variable', () => {
        const { getByTestId } = render(<BookCard />);
        const state = { appReducer: { favorite: ['abc'] } };
        const isFocussed = jest.spyOn(redux, 'useSelector').mockImplementation((val) => {
            val(state);
        });
        isFocussed.mockClear();
        // fireEvent.press(getByTestId('search'));
        fireEvent.press(getByTestId('heart'));
    });

    test('test with passing isFavorite variable', async () => {
        const { getByTestId } = render(<BookCard />);

        act(() => {
            const state = { appReducer: { favorite: ['abc'] } };
            jest.spyOn(React, 'useState').mockReturnValue(true);
        });
    });
});
