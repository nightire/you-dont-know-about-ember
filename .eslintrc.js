'use strict';

module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
    },
  },
  plugins: ['ember'],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
    'plugin:prettier/recommended',
  ],
  env: { browser: true, es2021: true },
  rules: {
    'no-console': 'warn',
    'no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
      },
    ],
  },
  overrides: [
    {
      files: ['app/**/*.ts', 'tests/**/*.ts'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            args: 'after-used',
            argsIgnorePattern: '^_',
            ignoreRestSiblings: true,
            varsIgnorePattern: '^_',
          },
        ],
      },
    },
    {
      files: ['app/**/*.typegen.ts'],
      rules: {
        '@typescript-eslint/ban-types': 'off',
      },
    },
    {
      files: ['tests/**/*-test.{js,ts}'],
      extends: ['plugin:qunit/recommended'],
    },
    {
      files: [
        './.eslintrc.js',
        './.prettierrc.js',
        './.template-lintrc.js',
        './ember-cli-build.js',
        './testem.js',
        './blueprints/*/index.js',
        './config/**/*.js',
        './lib/*/index.js',
        './server/**/*.js',
      ],
      parserOptions: { sourceType: 'script' },
      env: { browser: false, node: true },
      plugins: ['node'],
      extends: ['plugin:node/recommended'],
      rules: {
        'node/no-extraneous-require': [
          'error',
          { allowModules: ['ember-engines'] },
        ],
        // this can be removed once the following is fixed
        // https://github.com/mysticatea/eslint-plugin-node/issues/77
        'node/no-unpublished-require': 'off',
      },
    },
  ],
};
