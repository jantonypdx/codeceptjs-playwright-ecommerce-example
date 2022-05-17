const { devices } = require('playwright');
const { config } = require('./codecept.conf');

// see device list: https://bit.ly/3t4stbp
config.helpers.Playwright.emulate = devices['iPhone 12'];

exports.config = config;
