import { DarkTheme as PaperDarkTheme } from 'react-native-paper';

const darkTheme = {
    ...PaperDarkTheme,
    colors: {
        ...PaperDarkTheme.colors,
        primary: 'white',
        accent: 'gray',
        highlight:'#23191E',
        background: 'black',
    },
};

export default darkTheme;
