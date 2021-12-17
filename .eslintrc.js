module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  ignorePatterns: [
    '__mocks__',
    'coverage',
    'lib',
    'utils',
    'node_modules/',
    'stories',
    'webpack',
    'app.tsx',
    'index.tsx',
    '*.test.tsx'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 2,
    '@typescript-eslint/no-explicit-any': 0,
    'react/display-name': 'off',

    'no-console': 1
  }
};
