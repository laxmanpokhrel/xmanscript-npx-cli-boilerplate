module.exports = {
  extends: ['plugin:prettier/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',

    extraFileExtensions: ['.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-unsafe-optional-chaining': 'warn',
    'import/no-import-module-exports': 'off',
    'object-curly-newline': 'off',
    'no-undef': 0,
    'import/no-unresolved': 0,
    'prefer-template': 1,
    'import/extensions': 0,
    'no-plusplus': 0,
    'no-unused-vars': 'error',
    'class-methods-use-this': 'warn',
    'no-param-reassign': 'warn',
    'no-nested-ternary': 'warn',
  },
};
