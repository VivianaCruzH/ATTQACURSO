/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://miattweb.att.com.mx/',
      show: true
    }
  },
  include: {
    I: './steps_file.js'
  },

  gherkin: {
    features: './features/*.feature',
    steps: ['./steps/attsteps.js']
  },
  name: 'Proyecto3'
}