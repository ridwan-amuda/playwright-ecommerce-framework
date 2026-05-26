const { When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { ProductAPI } = require('../../api/ProductAPI');
const { getCreateUserData } = require('../../test-data/createUserData');
const { generateRandomEmail } = require('../../utils/helpers');

When('the user sends a POST request to create a new user', async function () {
  const productAPI = new ProductAPI();
  const userData = getCreateUserData();
  

  this.response = await productAPI.createUser(userData);
});

Then('the create user API response should confirm account created', async function () {
  const responseBody = await this.response.json();

  assert.strictEqual(responseBody.responseCode, 201);
  assert.strictEqual(responseBody.message, 'User created!');
});