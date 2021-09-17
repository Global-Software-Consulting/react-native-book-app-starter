module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./app'],
                extensions: [
                    '.ios.tsx',
                    '.android.tsx',
                    '.ios.js',
                    '.android.js',
                    '.js',
                    '.ts',
                    '.tsx',
                    '.json',
                    '.gif',
                    '.png',
                ],
                alias: {
                    '@assets': './assets',
                },
            },
        ],
        'react-native-reanimated/plugin',
    ],
    env: {
        production: {
            plugins: ['react-native-paper/babel'],
        },
    },
};
