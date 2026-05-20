class CheckoutPage {

  constructor(page) {

    this.page = page;

    this.proceedToCheckoutButton = page.locator('.check_out');
    this.checkoutPageTitle = page.locator('text=Address Details');
  }

  async clickProceedToCheckout() {

    await this.proceedToCheckoutButton.waitFor({
      state: 'visible'
    });

    await this.proceedToCheckoutButton.click();
  }

  async isCheckoutPageVisible() {

    return await this.checkoutPageTitle.isVisible();
  }
}

module.exports = { CheckoutPage };