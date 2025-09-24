/* eslint-env node */
const { defineConfig, globalIgnores } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = defineConfig([
  globalIgnores([
    'dist/*',
    'babel.config.js',
    'metro.config.js',
    'tailwind.config.js',
    'app/+html.tsx',
  ]),
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    rules: {
      'react/display-name': 'off',
      'func-style': ['error', 'expression'],
      'no-restricted-syntax': [
        'error',
        {
          selector: 'FunctionDeclaration',
          message: 'Use arrow functions instead of function declarations.',
        },
        {
          selector: 'ExportDefaultDeclaration > FunctionDeclaration',
          message:
            'Default-exported functions are not allowed. Use a named const and export it instead.',
        },
      ],
      'import/no-anonymous-default-export': [
        'error',
        {
          allowArrowFunction: false,
          allowAnonymousClass: false,
          allowAnonymousFunction: false,
          allowCallExpression: false,
          allowNew: false,
        },
      ],
    },
  },
]);
