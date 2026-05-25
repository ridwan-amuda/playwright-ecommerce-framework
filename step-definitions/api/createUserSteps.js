const { When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { ProductAPI } = require('../../api/ProductAPI');
const { generateRandomEmail } = require('../../utils/helpers');

When('the user sends a POST request to create a new user', async function () {
  const productAPI = new ProductAPI();

  const userData = {
    name: 'Test User',
    email: generateRandomEmail(),
    password: 'Password123',
    title: 'Mr',
    birth_date: '10',
    birth_month: 'May',
    birth_year: '1990',
    firstname: 'Test',
    lastname: 'User',
    company: 'Automation Ltd',
    address1: '123 Test Street',
    address2: 'Flat 1',
    country: 'Canada',
    zipcode: '12345',
    state: 'Ontario',
    city: 'Toronto',
    mobile_number: '1234567890'
  };

  this.response = await productAPI.createUser(userData);
});

Then('the create user API response should confirm account created', async function () {
  const responseBody = await this.response.json();

  assert.strictEqual(responseBody.responseCode, 201);
  assert.strictEqual(responseBody.message, 'User created!');
});