const { When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { ProductAPI } = require('../../api/ProductAPI');
const users = require('../../test-data/users.json');
const { UserAPI } = require('../../api/UserAPI');


When('the user sends a POST request to login API with valid credentials', async function () {
  const userAPI = new UserAPI();
  
  //const productAPI = new ProductAPI();

  this.response = await userAPI.loginUser(
    users.validUser.email,
    users.validUser.password
  );
});

When('the user sends a POST request to login API with invalid credentials', async function () {
    const userAPI = new UserAPI();

  //const productAPI = new ProductAPI();

  this.response = await userAPI.loginUser(
    users.invalidUser.email,
    users.invalidUser.password
  );
});

Then('the login API response should confirm user exists', async function () {
  const responseBody = await this.response.json();

  assert.strictEqual(responseBody.responseCode, 200);
  assert.strictEqual(responseBody.message, 'User exists!');
});

Then('the login API response should show invalid credentials message', async function () {
  const responseBody = await this.response.json();

  assert.strictEqual(responseBody.responseCode, 404);
  assert.strictEqual(responseBody.message, 'User not found!');
});