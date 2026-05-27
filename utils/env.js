require('dotenv').config();

module.exports = {
  baseUrl: process.env.BASE_URL,
  apiBaseUrl: process.env.API_BASE_URL,
  headless: process.env.HEADLESS === 'true'
};