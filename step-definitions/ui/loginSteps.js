const { Given, When, Then,}= require('@cucumber/cucumber')
const assert = require('assert')
const {POManager} = require('../../pages/POManager');
const {expect,playright} = require ('@playwright/test');
const users = require('../../test-data/users.json')


Given('the user is on the home page', async function () {
    const homePage = this.poManager.getHomePage();
    await homePage.open();
    await homePage.acceptCookiesIfVisible();
});

When('the user clicks on Signup Login', async function () {
  const homePage = this.poManager.getHomePage();
  homePage.clickSignupLogin();
  await this.page.waitForURL('**/login');
  
});

Then('the user enters valid login credentials', async function () {
  const loginPage = this.poManager.getLoginPage()
    
  await loginPage.login(users.validUser.email,
                        users.validUser.password);
  
});

Then('the user should be logged in successfully', async function () {
  
  const loginPage = this.poManager.getLoginPage()
  const isLoggedIn = await loginPage.isUserLoggedIn();

  assert.strictEqual(isLoggedIn, true);
});

When('the user enters invalid login credentials', async function () {
  
  const loginPage = this.poManager.getLoginPage()
  
  await loginPage.login(users.invalidUser.email,
                        users.invalidUser.password);

});



Then('an error message should be displayed', async function () {

  const loginPage = this.poManager.getLoginPage();
  const isVisible = await loginPage.isInvalidLoginErrorVisible();
  assert.strictEqual(isVisible, true);

});

