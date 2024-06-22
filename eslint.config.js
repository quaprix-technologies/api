// eslint.config.js

export default [
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        require: 'readonly',
      },
    },
    rules: {
      // Enforce 2-space indentation
      'indent': ['error', 2],

      // Enforce Unix linebreaks
      'linebreak-style': ['error', 'unix'],

      // Enforce single quotes
      'quotes': ['error', 'single'],

      // Enforce semi-colons
      'semi': ['error', 'always'],

      // Enforce max line length of 80 characters
      'max-len': ['error', { code: 80 }],

      // Enforce no trailing spaces
      'no-trailing-spaces': 'error',

      // Enforce consistent spacing inside braces
      'object-curly-spacing': ['error', 'always'],

      // Require or disallow newline at the end of files
      'eol-last': ['error', 'always'],

      // Disallow multiple empty lines
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],

      // Enforce consistent spacing inside array brackets
      'array-bracket-spacing': ['error', 'never'],

      // Enforce consistent spacing before function definition open parenthesis
      'space-before-function-paren': ['error', 'never'],

      // Enforce consistent spacing before and after keywords
      'keyword-spacing': ['error', { before: true, after: true }],

      // Disallow the use of console (allowing for warnings and errors)
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
];
