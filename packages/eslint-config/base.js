module.exports = {
  extends: ['airbnb', 'prettier', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  env: {
    es2021: true,
    node: true,
  },
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'react/function-component-definition': 'off',
    'react/require-default-props': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'no-console': 'warn',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
  },
  // overrides: [
  //   {
  //     files: [],
  //     rules: {},
  //   },
  // ],
};
