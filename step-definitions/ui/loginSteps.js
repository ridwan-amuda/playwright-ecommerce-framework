const { Given, When, Then, And}= require('@cucumber/cucumber')
const assert = require('assert')
const {POManager} = require('../../pages/POManager');
const {expect,playright} = require ('@playwright/test');


Given('the user is on the home page', async function () {
    const homePage = this.poManager.getHomePage();
    await homePage.open();
    await homePage.acceptCookiesIfVisible();
});

When('the user clicks on Signup Login', async function () {
  const homePage = this.poManager.getHomePage();
  homePage.clickSignupLogin();
  
});

Then('the user enters valid login credentials', async function () {
  const loginPage = this.poManager.getLoginPage()
  await loginPage.login('michael.smith@testmail.com', 'Michael');
  
});

Then('the user should be logged in successfully', async function () {
  
  const loginPage = this.poManager.getLoginPage()
  const isLoggedIn = await loginPage.isUserLoggedIn();

  assert.strictEqual(isLoggedIn, true);
});