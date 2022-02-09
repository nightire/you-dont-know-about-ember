'use strict';

module.exports = {
  plugins: [
    'ember-template-lint-plugin-prettier',
    // 'ember-template-lint-plugin-tailwindcss',
  ],
  extends: [
    'recommended',
    'ember-template-lint-plugin-prettier:recommended',
    // 'ember-template-lint-plugin-tailwindcss:recommended',
  ],
  rules: {
    'no-bare-strings': false,
  },
};
