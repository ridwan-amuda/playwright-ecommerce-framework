const { When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

When('the user proceeds to checkout', async function () {

  const checkoutPage = this.poManager.getCheckoutPage();

  await checkoutPage.clickProceedToCheckout();
});


Then('the checkout page should be displayed', async function () {

  const checkoutPage = this.poManager.getCheckoutPage();
  const isVisible = await checkoutPage.isCheckoutPageVisible();

  assert.strictEqual(isVisible, true);
});