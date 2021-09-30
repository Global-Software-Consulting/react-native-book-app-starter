import { DefaultTheme as PaperDefaultTheme } from 'react-native-paper';
export const defaultTheme = {
    ...PaperDefaultTheme,
    colors: {
        ...PaperDefaultTheme.colors,
        primary: 'black',
        accent: 'white',
        highlight:'#FAF9F6',
        background: 'white',
    },
};

export default defaultTheme;
