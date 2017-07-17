/* global module */
module.exports = {
  'plugins': {
    'local': {
      'browsers': ['chrome'],
    },
    'istanbul': {
      'verbose': true,
      'dir': 'logs/coverage',
      'reporters': ['text-summary', 'lcov'],
      'include': ['/src/**'],
      'exclude': ['**/test/**'],
    },
    'xunit-reporter': {
      'output': 'logs/test-results.xml',
    },
  },
};
