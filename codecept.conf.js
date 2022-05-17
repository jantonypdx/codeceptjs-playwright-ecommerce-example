const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './tests/*.test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://automationpractice.com/index.php',
      show: true,
      timeout: 30000,
      waitForTimeout: 10000,
      waitForAction: 500,
      channel: 'chrome'
    },
    PlaywrightHelper: {
      require: `./helpers/playwright_helper.js`
    }
  },
  plugins: {
    screenshotOnFail: {
      enabled: false
    }
  },
  include: {
    I: './steps_file.js',
    header: './pages/header.js',
    search: './pages/search.js',
    category: './pages/category.js',
    cart: './pages/cart.js'
  },
  bootstrap: null,
  mocha: {},
  gherkin: {
    features: `./features/*.feature`,
    steps: [`./steps/steps.js`]
  },
  name: 'codeceptjs-playwright-ecommerce-example'
};
