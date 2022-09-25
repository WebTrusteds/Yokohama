module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  overrides: [
  ],
  plugins: [
    'react-native',
    'react',
  ],
  // parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  //  parser: 'babel-eslint',
  },
  rules: {
    'template-curly-spacing': 'off',
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'no-unused-vars': 0,
    'no-unused-expressions': 0,
    'no-shadow': 0,
    'no-underscore-dangle': 0,
    'global-require': 0,
    'no-console': 0,
    'import/prefer-default-export': 0,
    'no-return-assign': 0,
    'no-use-before-define': 0,
    'no-return-await': 0,
    'no-trailing-spaces': 0,
    'no-bitwise': 0,
    'arrow-body-style': 0,
    'padded-blocks': 0,
    'prefer-template': 0,
    'operator-linebreak': 0,
    eqeqeq: 0,
  },
}
