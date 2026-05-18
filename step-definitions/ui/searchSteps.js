const { When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const {POManager} = require('../../pages/POManager');
const {expect,playright} = require ('@playwright/test');


When('the user navigates to the products page', async function () {
  const productPage = this.poManager.getProductPage();

  await productPage.navigateToProductsPage();
});

When('the user searches for {string}', async function (productName) {
  const productPage = this.poManager.getProductPage();

  await productPage.searchProduct(productName);
});

Then('searched products should be displayed', async function () {
  const productPage = this.poManager.getProductPage();

  const isTitleVisible = await productPage.isSearchedProductsTitleVisible();
  const productCount = await productPage.getProductCount();

  assert.strictEqual(isTitleVisible, true);
  assert.ok(productCount > 0, 'Expected at least one searched product to be displayed');
});


