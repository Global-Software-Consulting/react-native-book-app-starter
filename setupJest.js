import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
global.fetch = require('jest-fetch-mock')
// require('jest-fetch-mock').enableMocks()
