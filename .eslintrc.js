module.exports = {
    root: true,
    extends: [
        '@react-native-community',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    plugins: ['react', '@typescript-eslint', 'react-hooks'],
    rules: {
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'typeLike',
                format: ['PascalCase', 'UPPER_CASE'],
            },
        ],
        'no-prototype-builtins': 0,
        '@typescript-eslint/no-explicit-any': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react-native/no-inline-styles': 0, // @TODO remove this after code cleanup with styled components
        '@typescript-eslint/ban-ts-ignore': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-empty-function': 0,
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 'error',
        'eslint-disable-next-line react-hooks/exhaustive-deps': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                args: 'all',
                argsIgnorePattern: '^__',
                varsIgnorePattern: '^__|React',
            },
        ],
    },
    settings: {
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
};
