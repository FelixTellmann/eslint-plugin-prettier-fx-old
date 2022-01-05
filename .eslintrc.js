'use strict';

module.exports = {
  plugins: ['node', 'eslint-plugin', 'self'],
  extends: [
    'not-an-aardvark/node',
    'plugin:node/recommended',
    'plugin:eslint-plugin/recommended',
    'prettier-fx'
  ],
  env: { mocha: true },
  root: true,
  rules: {
    'self/prettier': ['error'],
    'eslint-plugin/report-message-format': ['error', '^[^a-z].*\\.$']
  }
};
