/* global module */
module.exports = {
  'plugins': {
    'local': {
      'browsers': ['chrome'],
    },
  },
  'xunit-reporter': {
    output: 'logs/tiki-test-results.xml',
  },
  'istanbul': {
    verbose: true,
    dir: 'logs/coverage',
    reporters: ['text-summary', 'lcov'],
    include: ['/src/**'],
    exclude: ['**/test/**'],
  },
};
