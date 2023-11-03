/* eslint-disable */
module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
    },
    env: {
        browser: false,
        es6: true,
        node: true,
        commonjs: true
    },
    parser: '@typescript-eslint/parser',
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    plugins: ['@typescript-eslint'],
    globals: {
        describe: true,
        test: true,
        expect: true
    },
    rules: {
        '@typescript-eslint/no-explicit-any': 2,
        '@typescript-eslint/no-this-alias': [
            'error',
            {
                allowDestructuring: true,
                allowedNames: ['self']
            }
        ],
        '@typescript-eslint/no-unused-vars': [2, { 'vars': 'all', 'args': 'after-used' }],
        '@typescript-eslint/no-redeclare': 2,
        'indent': [2, 4, { SwitchCase: 1 }],
        'linebreak-style': [0, 'error', 'windows', 'unix'],
        'quotes': [2, 'single'],
        'no-caller': 2,
        'semi': ['error', 'always'],
        'no-multiple-empty-lines': [2, { 'max': 2 }],
        'no-console': 2,
        'no-constant-condition': 2,
        '@typescript-eslint/no-extra-parens': 2,
        'no-extra-semi': 2,
        'no-func-assign': 2,
        'no-mixed-spaces-and-tabs': [2, false],
        'no-trailing-spaces': 1,
        'camelcase': 2,
        'comma-dangle': [2, 'never'],
        'consistent-this': [2, 'self'],
        'no-multi-spaces': 1,
        'no-multi-str': 2,
        'no-undef': 2,
        'no-sparse-arrays': 2,
        'no-unreachable': 2,
        'no-unused-expressions': 2,
        'no-unused-vars': [2, { 'vars': 'all', 'args': 'after-used' }],
        'no-use-before-define': 2,
        'no-extra-boolean-cast': 2,
        'no-void': 2,
        'no-var': 2,
        'brace-style': [1, '1tbs'],
        'arrow-spacing': 0,
        'comma-spacing': [2, { 'before': false, 'after': true }],
        'comma-style': [2, 'last'],
        'curly': [2, 'all'],
        'default-case': 2,
        'dot-notation': [0, { 'allowKeywords': true }],
        'eqeqeq': 2,
        'generator-star-spacing': 0,
        'init-declarations': 2,
        'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
        'newline-after-var': 2,
        'id-match': 0,
        'semi-spacing': [0, { 'before': false, 'after': true }],
        'sort-vars': 0,
        'space-before-function-paren': [0, 'always'],
        'strict': 2,
        'use-isnan': 2,
        'valid-typeof': 2,
        'no-useless-escape': 2,
        'require-atomic-updates': 'off'
    },
}