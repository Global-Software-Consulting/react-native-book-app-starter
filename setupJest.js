import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
jest.mock('react-native-simple-toast', () => ({
    Toast: jest.fn()

  }));
jest.mock('@react-native-community/netinfo', () => ({
    netInfo: jest.fn(),
}));
jest.mock('@react-navigation/core', () => {
    return {
        __esModule: true,
        A: true,
        useNavigation: jest.fn(),
        default: 'mockedDefaultExport',
    }
})
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
global.fetch = require('jest-fetch-mock')
// require('jest-fetch-mock').enableMocks()
jest.mock('react-native-iphone-x-helper', () => ({
    getStatusBarHeight: jest.fn(),
    getBottomSpace: jest.fn(),
}));

jest.mock('react-native-vector-icons/FontAwesome', () => {
    return {
        __esModule: true,
        A: true,
        namedExport: jest.fn(),
        default: 'mockedDefaultExport',
    }
})

jest.mock("react-native-responsive-screen", () => {
    return {
        heightPercentageToDP: jest.fn(),
        widthPercentageToDP: jest.fn(),

    }
});

jest.mock('react-i18next', () => {
    return {
        useTranslation: () => {
            return {
                t: jest.fn(),
            };
        },
    };
});