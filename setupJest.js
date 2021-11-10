import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import { View } from 'react-native';
import images from './app/config/images';
import { getPercentageHeight, getPercentageWidth } from 'utils/dimentionUtil'


jest.mock('react-native-simple-toast', () => ({
    Toast: jest.fn()

  }));
jest.mock('@react-native-community/netinfo', () => ({
    netInfo: jest.fn(),
}));
jest.mock('@react-navigation/core', () => {
    const actualNav = jest.requireActual('@react-navigation/core')
    return {
        ...actualNav,
        useNavigation: () => ({
            navigate: jest.fn(),
            dispatch: jest.fn(),
        }),
        useIsFocused: jest.fn(),
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
                i18n:{languages:"english"}
            };
        },
    };
});

jest.mock('react-native-popup-menu', () => ({
    Menu: 'Menu',
    MenuProvider: 'MenuProvider',
    MenuOptions: 'MenuOptions',
    MenuOption: 'MenuOption',
    MenuTrigger: 'MenuTrigger',
}));
  
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

jest.mock('react-native-pdf', () => 'Pdf')

jest.mock('react-native-modal', () => {
    return {
        __esModule: true,
        A: true,
        Modal: jest.fn(),
        default: 'mockedDefaultExport',
    }
})

jest.mock('./workaround/useEffect', () => {
    return { useEffect: require('react').useLayoutEffect }
})
jest.mock('react-native-device-info', () => {
    return {
        DeviceInfo: { isTablet: jest.fn() },
        isTablet: jest.fn(),
    }
})

jest.mock('react-redux', () => {
    return {
        __esModule: true,
        A: true,
        useDispatch: jest.fn(() => {}),
        useSelector: jest.fn(), 
        default: 'mockedDefaultExport',
    }
})
jest.mock('react-native-reanimated', () => {
    const Reanimated = require('react-native-reanimated/mock')

    // The mock for `call` immediately calls the callback which is incorrect
    // So we override it with a no-op
    Reanimated.default.call = () => {}

    return Reanimated
})


jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

