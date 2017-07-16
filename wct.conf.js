/* global module */
module.exports = {
  'plugins': {
    'local': {
      'browsers': ['chrome'],
    },
    'sauce': {
      'disabled': true,
      'browsers': [{
        'browserName': 'microsoftedge',
        'platform': 'Windows 10',
        'version': '',
      }, {
        'browserName': 'internet explorer',
        'platform': 'Windows 8.1',
        'version': '11',
      }, {
        'browserName': 'safari',
        'platform': 'OS X 10.11',
        'version': '10',
      }, {
        'browserName': 'safari',
        'platform': 'OS X 10.11',
        'version': '9',
      }, {
        'browserName': 'chrome',
        'platform': 'Linux',
        'version': '',
      }, {
        'browserName': 'chrome',
        'platform': 'Windows 10',
        'version': 'beta',
      }, {
        'browserName': 'chrome',
        'platform': 'Windows 10',
        'version': '',
      }, {
        'browserName': 'firefox',
        'platform': 'Windows 10',
        'version': '',
      }],
    },
  },
};
