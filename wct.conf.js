/* global module */
module.exports = {
  'plugins': {
    'local': {
      'browsers': ['chrome'],
    },
    'istanbul': {
      verbose: true,
      dir: 'logs/coverage',
      reporters: ['text-summary', 'lcov'],
      include: ['/src/**'],
      exclude: ['**/test/**'],
    },
    'xunit-reporter': {
      output: 'logs/test-results.xml',
    },
    'sauce': {
      'disabled': true,
      'browsers': [{
        'browserName': 'chrome',
        'platform': 'Windows 10',
        'version': '',
      }, {
        'browserName': 'chrome',
        'platform': 'Windows 8.1',
        'version': 'beta',
      }, {
        'browserName': 'safari',
        'platform': 'OS X 10.11',
        'version': '10',
      }, {
        'browserName': 'chrome',
        'platform': 'OS X 10.11',
        'version': 'beta',
      }, {
        'browserName': 'chrome',
        'platform': 'OS X 10.11',
        'version': '',
      }, {
        'browserName': 'firefox',
        'platform': 'Windows 10',
        'version': '',
      }],
    },
  },
};
