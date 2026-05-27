module.exports = {
  default: {
    require: [
      'step-definitions/**/*.js',
      'hooks/**/*.js'
    ],

    format: [
      'progress',
      'json:reports/cucumber-report.json'
    ],

    timeout: 60000,

    retry: 1,

    parallel: 2
  }
};