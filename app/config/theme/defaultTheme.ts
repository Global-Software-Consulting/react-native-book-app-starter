import {
    DarkTheme as PaperDarkTheme,
    DefaultTheme as PaperDefaultTheme,
  } from 'react-native-paper';
  export const defaultTheme = {
    ...PaperDefaultTheme,
    colors: {
      ...PaperDefaultTheme.colors,
      primary: 'black',
    accent: 'white',
    background:'white',
    },
  };
  
  
  export default defaultTheme
  