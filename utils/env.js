require('dotenv').config();

module.exports = {
  baseUrl: process.env.BASE_URL || 'https://automationexercise.com',
  apiBaseUrl: process.env.API_BASE_URL || 'https://automationexercise.com/api',
  headless: process.env.HEADLESS !== 'false'
};