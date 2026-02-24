export default [
  {
    files: ['src/**/*.js', 'src/**/*.test.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      'no-unused-vars': 'error',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'no-console': 'warn'
    }
  }
];