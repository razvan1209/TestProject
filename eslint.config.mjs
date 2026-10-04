import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import pluginCypress from 'eslint-plugin-cypress';
import globals from 'globals';

export default defineConfig([
  // Ignore generated/dependency files
  {
    ignores: [
      'node_modules/**',
      'cypress/screenshots/**',
      'cypress/videos/**',
      'coverage/**',
      'dist/**',
      'build/**',
    ],
  },

  // General JavaScript rules
  {
    files: ['cypress/**/*.js'],

    extends: [js.configs.recommended],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha,
      },
    },
  },

  // Cypress-specific rules
  {
    files: ['cypress/**/*.js'],

    extends: [pluginCypress.configs.recommended],

    rules: {
      'cypress/no-unnecessary-waiting': 'error',
      'cypress/no-force': 'warn',
    },
  },
]);
