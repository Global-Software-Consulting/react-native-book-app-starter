import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
jest.mock('react-native-simple-toast', () => {
    return {
        Toast: jest.fn(),
    };
});
jest.mock('@react-native-community/netinfo', () => ({
    netInfo: jest.fn(),
}));
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
global.fetch = require('jest-fetch-mock')
// require('jest-fetch-mock').enableMocks()
