module.exports = {
  default: {
    require: [
      'step-definitions/**/*.js',
      'hooks/**/*.js'
    ],
    format: ['progress'],
    timeout: 60000
  }
};