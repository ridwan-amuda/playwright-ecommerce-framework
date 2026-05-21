module.exports = {
  default: {
    require: [
      'step-definitions/**/*.js',
      'hooks/**/*.js'
    ],
    format: ['progress'],

    format: [
      'progress',
      'json:reports/cucumber-report.json'
    ],

    
    timeout: 60000
  }
};