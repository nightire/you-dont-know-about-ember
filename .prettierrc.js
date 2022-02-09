'use strict';

module.exports = {
  printWidth: 80,
  overrides: [
    {
      files: '*.hbs',
      options: {
        parser: 'glimmer',
      },
    },
    {
      files: '*.[jt]s',
      options: {
        singleQuote: true,
      },
    },
    {
      files: '*.ts',
      options: {
        parser: 'babel-ts',
      },
    },
  ],
};
