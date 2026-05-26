const { Given, When } = require('@cucumber/cucumber');
const { ProductAPI } = require('../../api/ProductAPI');
const { getCreateUserData } = require('../../test-data/createUserData');
//const {poManager} = require('../../pages/POManager')
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

  await homePage.acceptCookiesIfVisible();

  await homePage.clickSignupLogin();

  await loginPage.login(
    this.createdUser.email,
    this.createdUser.password
  );
});