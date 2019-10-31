exports.config = {
  tests: './tests/*.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.google.com/',
      show: false
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'Codecept-Test'
}
