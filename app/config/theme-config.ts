import { DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';

export const PaperThemeDefault = {
    ...PaperDefaultTheme,
    colors: {
        ...PaperDefaultTheme.colors,
        primary: '#3498db',
        iconColor: 'blue',
    },
};

export const PaperThemeDark = {
    ...PaperDarkTheme,
    colors: {
        ...PaperDarkTheme.colors,
        primary: '#3498db',
        iconColor: 'white',
    },
};
