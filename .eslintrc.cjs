module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'plugin:import/errors',
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.ts', '.tsx'],
        map: [
          ['@shared', './src/shared'],
          ['@entities', './src/entities'],
          ['@features', './src/features'],
          ['@widgets', './src/widgets'],
          ['@pages', './src/pages'],
        ],
      },
    },
  },
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'linebreak-style': 'off',
    'import/prefer-default-export': 'off',
    semi: 'off',
    'import/extensions': 'off',
    'react/function-component-definition': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'no-use-before-define': 'off',
    'operator-linebreak': 'off',
    'no-shadow': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'arrow-body-style': 'warn',
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
  },
}
