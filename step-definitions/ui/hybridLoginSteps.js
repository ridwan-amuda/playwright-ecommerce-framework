const { Given, When, Then } = require('@cucumber/cucumber');
const { ProductAPI } = require('../../api/ProductAPI');
const { getCreateUserData } = require('../../test-data/createUserData');
const assert = require('assert');
Given('a new user account is created via API', async function () {

  const productAPI = new ProductAPI();

  const userData = getCreateUserData();

  this.createdUser = userData;

  this.response = await productAPI.createUser(userData);
});

When('the user logs into the UI with the created account', async function () {

  const homePage = this.poManager.getHomePage();
  const loginPage = this.poManager.getLoginPage();

  await homePage.open();

  await homePage.clickSignupLogin();

  await loginPage.login(
    this.createdUser.email,
    this.createdUser.password
  );

});


  Then('the created user account should be deleted via API', async function () {
  const productAPI = new ProductAPI();

  const response = await productAPI.deleteUser(
    this.createdUser.email,
    this.createdUser.password
  );

  const responseBody = await response.json();

  assert.strictEqual(response.status(), 200);
  assert.strictEqual(responseBody.responseCode, 200);
  assert.strictEqual(responseBody.message, 'Account deleted!');
});