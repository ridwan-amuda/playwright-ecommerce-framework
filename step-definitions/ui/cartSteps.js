const { When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

When('the user adds the first product to the cart', async function () {

  const productPage = this.poManager.getProductPage();
  await productPage.addFirstProductToCart();
});

When('the user views the cart', async function () {

  const productPage = this.poManager.getProductPage();
  await productPage.clickViewCart();
});

Then('the selected product should be displayed in the cart', async function () {

  const cartPage = this.poManager.getCartPage();
  const productCount = await cartPage.getCartProductCount();
  assert.ok(productCount > 0, 'Expected at least one product in cart');
});