/* global module */
module.exports = {
  'plugins': {
    'local': {
      'browsers': ['chrome'],
    },
    'istanbul': {
      'disabled': true,
      'verbose': true,
      'dir': 'logs/coverage',
      'reporters': ['text-summary', 'lcov'],
      'include': ['/src/**'],
      'exclude': ['**/test/**'],
    },
    'xunit-reporter': {
      'disabled': true,
      'output': 'logs/test-results.xml',
    },
  },
};
